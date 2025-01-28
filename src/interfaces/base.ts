export type BaseSlice<T> = {
  fetching: boolean;
  data: T;
  error: unknown;
};
