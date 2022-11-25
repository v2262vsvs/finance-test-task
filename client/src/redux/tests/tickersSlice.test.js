import { mockTicker } from './constants';
import {
  intervalUpdated, tickersChanged, tickersReceived, viewTickers,
} from '../tickersSlice';
import { store } from '../store';

describe('tickersSlice', () => {
  it('tickersReceived', () => {
    store.dispatch(tickersReceived([mockTicker]));
    expect(store.getState().tickers).toEqual([[mockTicker]]);
  });

  it('intervalUpdated', () => {
    store.dispatch(intervalUpdated(5));
    expect(store.getState().interval).toEqual(5);
  });

  it('viewTickers', () => {
    store.dispatch(viewTickers(true));
    expect(store.getState().hasTickers).toEqual(true);
  });

  it('tickersChanged', () => {
    store.dispatch(tickersChanged('A'));
    expect(store.getState().tickerNames).toEqual(['A']);
  });
});
