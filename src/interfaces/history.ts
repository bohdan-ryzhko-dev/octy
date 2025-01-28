import { BaseSlice } from './base';

export type HistoryItem = {
  base: string;
  target: string;
  amount: number;
  id: string;
};

export type HistoryState = Pick<BaseSlice<HistoryItem[]>, 'data'>;
