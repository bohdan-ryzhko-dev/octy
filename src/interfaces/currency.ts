import { BaseSlice } from './base';

export type Currency = {
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: string;
  conversion_rates: Record<string, number>;
};

export type ExchangeRate = {
  conversion_rate: number;
};

export type ExchangeRatePayload = { base: string; target: string };

export type CurrencyState = {
  exchangeRate: number | null;
} & BaseSlice<Currency | null>;
