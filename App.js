/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, Image, Text, View, TextInput} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

import TabHomeScreen from './src/home/home_tab';
import TabStoreScreen from './src/store/store_tab';
import TabWishScreen from './src/wish_tab';
import TabMyScreen from './src/my_tab';
import TabAboutScreen from './src/about_tab';

const Tab = createBottomTabNavigator();

const TabBarIcon = (focused, name) => {
  let iconName;

  if (name == 'Home') {
    iconName = 'home-outline';
  } else if (name == 'Store') {
    iconName = 'person';
  } else if (name == 'Wish') {
    iconName = 'heart';
  } else if (name == 'My') {
    iconName = 'person-outline';
  } else if (name == 'About') {
    iconName = 'chatbubble-ellipses-outline';
  }

  return <Ionicons name={iconName} size={20} />;
};

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: 'black',
            style: {
              height: 60,
              paddingBottom: 5,
            },
            labelPosition: 'below-icon',
            labelStyle: {
              fontSize: 15,
              marginTop: -10,
            },
          }}
          screenOptions={({route}) => ({
            tabBarLabel: route.name,
            tabBarIcon: ({focused}) => TabBarIcon(focused, route.name),
          })}>
          <Tab.Screen name="About" component={TabAboutScreen} />
          <Tab.Screen name="Store" component={TabStoreScreen} />
          <Tab.Screen name="Home" component={TabHomeScreen} />
          <Tab.Screen name="Wish" component={TabWishScreen} />
          <Tab.Screen name="My" component={TabMyScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
