import { useSelector } from 'react-redux';

export const useTickersData = () => {
  const hasTickers = useSelector((state) => state.hasTickers);
  const [prevTickers,
    tickers = prevTickers] = useSelector((state) => (
    state.tickers.slice(-2)));

  return {
    hasTickers,
    prevTickers,
    tickers,
  };
};
