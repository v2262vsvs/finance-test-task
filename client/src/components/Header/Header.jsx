import { useSelector } from 'react-redux';
import { TickerList } from '../TickerList';

import './Header.scss';

export const Header = () => {
  const tickersLoaded = useSelector((state) => state.tickersLoaded);

  return (
    <div className="header">
      {tickersLoaded ? <TickerList /> : <div>Loading...</div>}
    </div>
  );
};
