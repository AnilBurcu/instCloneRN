import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabsNavigation from './src/router/bottomTabsNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigation />
    </NavigationContainer>
  );
};

export default App;
