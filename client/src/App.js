import './App.scss';
import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { InfoList } from './components/InfoList';
import { startGettingTickers } from '../src/redux/tickersSlice';
import { NewTickerRecomendation } from './components/NewTickerRecomendation';
import { useDispatch, useSelector } from 'react-redux';

 const App = () => {
  const dispatch = useDispatch();
  const [tickersLoaded, hasTickers] = useSelector((state) => (
    [state.tickersLoaded, state.hasTickers]));

  useEffect(() => {
    dispatch(startGettingTickers());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <Header />
      {tickersLoaded && hasTickers && <InfoList />}
      <div className="footer">
      <NewTickerRecomendation />
      </div>
    </div>
  );
};

export default App;
