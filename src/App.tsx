import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { HistoryScreen, HomeScreen } from './screens';

const MyTabs = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    History: HistoryScreen,
  },
});

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MyTabs.Navigator>
        <MyTabs.Screen name="Home" component={HomeScreen} />
        <MyTabs.Screen name="History" component={HistoryScreen} />
      </MyTabs.Navigator>
    </NavigationContainer>
  );
}

export default App;
