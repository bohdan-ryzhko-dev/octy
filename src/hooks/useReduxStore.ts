import { useSelector } from 'react-redux';
import { RootState } from '../redux';

export const useReduxStore = (): RootState => ({
  currencies: useSelector((state: RootState) => state.currencies),
  history: useSelector((state: RootState) => state.history),
});
