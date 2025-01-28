import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HistoryItem, HistoryState } from '../../interfaces';

const initialState: HistoryState = {
  data: [],
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setHistory: (state, action: PayloadAction<HistoryItem>) => {
      state.data.push(action.payload);
    },
    removeHistory: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(item => item.id !== action.payload);
    },
    clearHistory: state => {
      state.data = initialState.data;
    },
  },
});

export const { setHistory, removeHistory, clearHistory } = historySlice.actions;

export const historyReducer = historySlice.reducer;
