import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { useAppDispatch, useReduxStore } from '../../hooks';
import { clearHistory, removeHistory } from '../../redux';

import { styles } from './styles';

export const HistoryScreen = () => {
  const { history } = useReduxStore();
  const dispatch = useAppDispatch();

  console.log(history);

  return (
    <View style={styles.container}>
      <Button onPress={() => dispatch(clearHistory())} title="Clear" />
      <FlatList
        data={history.data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.base}>{item.base}</Text>
            <Text>TO</Text>
            <Text style={styles.target}>{item.target}</Text>
            <Text style={styles.result}>Result: {item.amount}</Text>
            <TouchableOpacity onPress={() => dispatch(removeHistory(item.id))}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
