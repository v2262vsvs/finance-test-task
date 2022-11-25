import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { subscribe } from '../API/api';

const initialState = {
  tickers: [],
  tickersLoaded: false,
  hasTickers: true,
  interval: 5,
  tickerNames: [],
};

export const tickersSlice = createSlice({
  name: 'tickers',
  initialState,
  reducers: {
    tickersReceived: (state, action) => {
      state.tickers.push(action.payload);
      state.tickersLoaded = true;
    },
    intervalUpdated: (state, action) => {
      state.interval = action.payload;
    },
    viewTickers: (state, action) => {
      state.hasTickers = action.payload;
    },
    tickersChanged: (state, action) => {
      if (state.tickerNames.includes(action.payload)) {
        state.tickerNames = state.tickerNames.filter(
          name => name !== action.payload,
        );
      } else {
        state.tickerNames.push(action.payload);
      }
    },
  },
});

export const {
  tickersReceived, intervalUpdated, viewTickers, tickersChanged,
} = tickersSlice.actions;

export default tickersSlice.reducer;

export const startGettingTickers = createAsyncThunk(
  'tickers/startGettingTickers',
  (_, { dispatch }) => {
    subscribe(
      (tickers) => {
        dispatch(tickersReceived(tickers));
      },
    );
  },
);

export const deleteTicker = createAsyncThunk(
  'tickers/deleteTicker',
  (tickerName, { dispatch }) => {
    fetch(`http://localhost:4000/tickers/${tickerName}`, {
      method: 'DELETE',
    }).then(response => {
      return response.json();
    }).then(result => {
      if (result.tickers.length > 0) {
        dispatch(tickersReceived(result.tickers));
      } else {
        dispatch(viewTickers(false));
      }

      dispatch(tickersChanged(tickerName));
    });
  },
);

export const addTicker = createAsyncThunk(
  'tickers/deleteTicker',
  (tickerName, { dispatch }) => {
    fetch(' http://localhost:4000/tickers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ ticker: tickerName }),
    }).then(response => {
      return response.json();
    }).then(result => {
      dispatch(tickersReceived(result.tickers));
      dispatch(tickersChanged(tickerName));
      dispatch(viewTickers(true));
    });
  },
);
