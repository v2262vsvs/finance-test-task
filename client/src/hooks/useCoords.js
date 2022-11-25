import { getCoords } from './../utils/getCoords';
import { useSelector } from 'react-redux';

export const useCoords = (tickerName) => {
  const data = useSelector((state) => {
    return getCoords(state.tickers, tickerName);
  });

  return data;
};
