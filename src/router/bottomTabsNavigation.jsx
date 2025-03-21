
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import SearchScreen from '../screens/search';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import ShopScreen from '../screens/shop';
import ReelScreen from '../screens/reel';
import { SCREENS } from '../utils/router';
import {
  Home,
  HomeField,
  Search,
  SearchField,
  Reel,
  ReelField,
  Shop,
  ShopField,
} from '../utils/icons';
import { Image, StyleSheet } from 'react-native';
const Tab = createBottomTabNavigator();

const {HOMESCREEN,SEARCHSCREEN,REELSCREEN,SHOPSCREEN,PROFILESCREEN} = SCREENS
const BottomTabsNavigation = () => {

  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
<Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <HomeField size={30} /> : <Home size={30} />,
        }}
        name={HOMESCREEN}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <SearchField size={30} /> : <Search size={30} />,
        }}
        name={SEARCHSCREEN}
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ReelField size={30} /> : <Reel size={30} />,
        }}
        name={REELSCREEN}
        component={ReelScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ShopField size={30} /> : <Shop size={30} />,
        }}
        name={SHOPSCREEN}
        component={ShopScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: focused => (
            <Image
              style={styles.avatar}
              source={require('../assets/profile.png')}
            />
          ),
        }}
        name={PROFILESCREEN}
        component={ProfileScreen}
      />
  </Tab.Navigator>
  )
}


export default BottomTabsNavigation

const styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 25,
  },
});