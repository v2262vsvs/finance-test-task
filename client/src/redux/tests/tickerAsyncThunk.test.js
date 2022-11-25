import { deleteTicker } from '../tickersSlice';
import { store } from '../store';
import { deleteResponse } from './constants';

describe('tickerAsyncThunk.test', () => {
  beforeAll(() => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(deleteResponse),
    }));
  });

  it('deleteTicker', async () => {
    await store.dispatch(deleteTicker('A'));

    
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'http://localhost:4000/tickers/A', { method: 'DELETE' },
    );
  });
});
