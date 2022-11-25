
export const getCoords = (tickers, tickerName) => {
  const coords = tickers.slice(-100)
    .reduce((prevCoords, tickersPoint) => {
      const ticker = tickersPoint
        .find(tickerItem => tickerItem.ticker === tickerName);

      if (ticker) {
        const point = {
          x: +new Date(ticker.last_trade_time),
          y: +ticker.price,
        };

        return prevCoords.concat(point);
      }

      return prevCoords;
    }, []);

  return coords;
};
