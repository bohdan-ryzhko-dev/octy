import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { CurrencyState } from '../../interfaces';
import { fetchCurrencies, fetchExchangeRate } from './thunks';

const initialState: CurrencyState = {
  fetching: false,
  data: null,
  error: null,
  exchangeRate: null,
};

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchExchangeRate.fulfilled, (state, action) => {
        state.exchangeRate = action.payload;
      })
      .addMatcher(
        isAnyOf(fetchCurrencies.pending, fetchExchangeRate.pending),
        state => {
          state.fetching = true;
        },
      )
      .addMatcher(
        isAnyOf(fetchCurrencies.fulfilled, fetchExchangeRate.fulfilled),
        state => {
          state.fetching = false;
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(fetchCurrencies.rejected, fetchExchangeRate.rejected),
        (state, action) => {
          state.fetching = false;
          state.error = action.error;
        },
      );
  },
});

export const currenciesReducer = currenciesSlice.reducer;
