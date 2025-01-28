import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosConfig } from '../../lib';
import { Currency, ExchangeRate, ExchangeRatePayload } from '../../interfaces';
import { AxiosResponse } from 'axios';

const CurrenciesEndpoints = {
  default() {
    return '/latest/USD';
  },
  exchange(base: string, target: string) {
    return `pair/${base}/${target}`;
  },
};

export const fetchCurrencies = createAsyncThunk<Currency>(
  'fetch/currencies',
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<Currency> = await axiosConfig.get(
        CurrenciesEndpoints.default(),
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchExchangeRate = createAsyncThunk<number, ExchangeRatePayload>(
  'fetch/exchange-rate',
  async ({ base, target }, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<ExchangeRate> = await axiosConfig.get(
        CurrenciesEndpoints.exchange(base, target),
      );

      return response.data.conversion_rate;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
