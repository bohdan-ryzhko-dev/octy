import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PersistConfig,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { currenciesReducer } from './currencies';
import { historyReducer } from './history';

const historyPersistConfig: PersistConfig<any, any, any, any> = {
  key: 'history',
  storage: AsyncStorage,
  whitelist: ['data'],
};

const reducer = combineReducers({
  currencies: currenciesReducer,
  history: persistReducer(historyPersistConfig, historyReducer),
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
