import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-between',
    minWidth: '100%',
    position: 'relative',
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
    width: '100%',
    borderColor: '#000',
    borderRadius: 8,
  },
  errorText: {
    position: 'absolute',
    left: 0,
    bottom: -20,
    color: 'red',
  },
});
