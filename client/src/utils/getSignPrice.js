
export const getSignPrice = (prevTickers, ticker) => {
  const prevTicker = prevTickers.find(prevTickerItem => (
    prevTickerItem.ticker === ticker.ticker));
  let sign = 0;

  if (prevTicker) {
    sign = +ticker.price - +prevTicker.price;
  }

  return sign;
};
