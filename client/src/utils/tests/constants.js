
const prevTicker1 = {
  ticker: '1',
  change: '0',
  change_percent: '0',
  dividend: '0',
  exchange: '0',
  last_trade_time: '',
  price: '100',
  yield: '0',
};

const ticker1 = {
  ticker: '1',
  change: '0',
  change_percent: '0',
  dividend: '0',
  exchange: '0',
  last_trade_time: '',
  price: '200',
  yield: '0',
};

const prevTicker2 = {
  ticker: '1',
  change: '0',
  change_percent: '0',
  dividend: '0',
  exchange: '0',
  last_trade_time: '',
  price: '200',
  yield: '0',
};

const ticker2 = {
  ticker: '1',
  change: '0',
  change_percent: '0',
  dividend: '0',
  exchange: '0',
  last_trade_time: '',
  price: '100',
  yield: '0',
};

const prevTicker3 = {
  ticker: '1',
  change: '0',
  change_percent: '0',
  dividend: '0',
  exchange: '0',
  last_trade_time: '',
  price: '200',
  yield: '0',
};

const ticker3 = {
  ticker: '1',
  change: '0',
  change_percent: '0',
  dividend: '0',
  exchange: '0',
  last_trade_time: '',
  price: '200',
  yield: '0',
};

const expectedResult1 = 100;
const expectedResult2 = -100;
const expectedResult3 = 0;

export const data = [
  {
    inputValue: {
      prevTicker: [prevTicker1],
      ticker: ticker1,
    },
    expectedResult: expectedResult1,
  },
  {
    inputValue: {
      prevTicker: [prevTicker2],
      ticker: ticker2,
    },
    expectedResult: expectedResult2,
  },
  {
    inputValue: {
      prevTicker: [prevTicker3],
      ticker: ticker3,
    },
    expectedResult: expectedResult3,
  },
];
