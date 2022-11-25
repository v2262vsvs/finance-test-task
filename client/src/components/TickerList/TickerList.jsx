//import { ListItem } from '../ListItem';
import ListItem from '../ListItem/ListItem'
import './TickerList.scss';
import { useTickersData } from '../../hooks/useTickersData';
import { getSignPrice } from '../../utils/getSignPrice';
import { FetchInterval } from '../FetchInterval';

export const TickerList = () => {
  const {  prevTickers, tickers } = useTickersData();


  return (
    
    <ul className="tickers">
           
      {tickers.map(ticker => {
        const sign = getSignPrice(prevTickers, ticker);
        return <ListItem key={ticker.ticker} ticker={ticker} sign={sign} />;
      })}
      <li className="tickers__item">
      <FetchInterval />
      </li>
    </ul>
  );
};
