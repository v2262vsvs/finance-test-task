import io from 'socket.io-client';

const socket = io('http://localhost:4000');


const subscribers = [];

export const subscribe = (
  subscriber,
) => {
  subscribers.push(subscriber);
};

socket.on('ticker', (tickers) => {
  subscribers.forEach((subscriber) => {
    subscriber(tickers);
  });
});

socket.emit('start');
