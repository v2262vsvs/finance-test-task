'use strict';
const express = require('express');
const http = require('http');
const io = require('socket.io');
const cors = require('cors');

const FETCH_INTERVAL = 5000;
const PORT = process.env.PORT || 4000;

const basicTickers = [
  'AAPL', // Apple
  'GOOGL', // Alphabet
  'MSFT', // Microsoft
  'AMZN', // Amazon
  'FB', // Facebook
  'TSLA', // Tesla
];
let tickers = [...basicTickers];

function randomValue(min = 0, max = 1, precision = 0) {
  const random = Math.random() * (max - min) + min;
  return random.toFixed(precision);
}

function utcDate() {
  const now = new Date();
  return new Date(now.getUTCFullYear(), now.getUTCMonth(),
    now.getUTCDate(), now.getUTCHours(),
    now.getUTCMinutes(), now.getUTCSeconds());
}

function getQuotes(socket) {
  const quotes = tickers.map(ticker => ({
    ticker,
    exchange: 'NASDAQ',
    price: randomValue(100, 200, 2),
    change: randomValue(0, 50, 2),
    change_percent: randomValue(0, 1, 2),
    dividend: randomValue(0, 1, 2),
    yield: randomValue(0, 2, 2),
    last_trade_time: utcDate(),
  }));

  if (socket && tickers.length > 0) {
    socket.emit('ticker', quotes);
  } else {
    return quotes;
  }
}

function trackTickers(socket) {
  // run the first time immediately
  getQuotes(socket);

  // every N seconds
  let timer = setInterval(function () {
    getQuotes(socket);
  }, FETCH_INTERVAL);

  socket.on('disconnect', function () {
    clearInterval(timer);
  });

  return (interval) => {
    clearInterval(timer);

    timer = setInterval(function () {
      getQuotes(socket);
    }, interval);
  };
}

let trackControl;

const app = express();

app.use(cors());

const server = http.createServer(app);

app.use(express.json());

const socketServer = io(server, {
  cors: {
    origin: '*',
  },
});

socketServer.on('connection', (socket) => {
  socket.on('start', () => {
    tickers = [...basicTickers];
    trackControl = trackTickers(socket);
  });
});

app.post('/tickers', function (req, res) {
  if (!req.body) {
    return res.sendStatus(400);
  }

  tickers.push(req.body.ticker);
  res.send({ tickers: getQuotes() });
});

app.post('/interval', function (req, res) {
  if (!req.body) {
    return res.sendStatus(400);
  }

  trackControl(req.body.interval);
  res.sendStatus(200);
});

app.delete('/tickers/:ticker', function (req, res) {
  tickers = tickers.filter(ticker => ticker !== req.params.ticker);

  res.send({ 'tickers': getQuotes() });
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(PORT, () => {
  console.log(`Streaming service is running on http://localhost:${PORT}`);
});
