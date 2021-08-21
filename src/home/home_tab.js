/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Text, View, Image, Linking, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  DrawerActions,
  useNavigation,
} from '@react-navigation/native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import HomeHomeScreen from './home_home_tab';
import HomeBestScreen from './home_best_tab';
import HomeEventScreen from './home_event_tab';

import MenuIcon from '../assets/pics/menu.png';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainHome = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeHomeScreen} />
      <Tab.Screen name="Best" component={HomeBestScreen} />
      <Tab.Screen name="Event" component={HomeEventScreen} />
    </Tab.Navigator>
  );
};

const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row', paddingRight: 15}}>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}>
        <Image
          source={require('../assets/pics/menu.png')}
          style={{width: 20, resizeMode: 'contain', marginLeft: 15}}
        />
      </TouchableOpacity>
    </View>
  );
};

const MainHomeDrawer = () => {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={MainHome} />
      {/* <Drawer.Screen name="User" component={UserDrawerScreen} /> */}
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="의류" />
      <DrawerItem label="가방" />
      <DrawerItem label="악세사리" />
      <DrawerItem label="생활" />
      <DrawerItem label="문구" />
      <DrawerItem label="지갑/파우치" />
      <DrawerItem label="어린이" />
      <DrawerItem label="소품" />
      <DrawerItem label="기타" />
    </DrawerContentScrollView>
  );
  {
    /* <DrawerItem label="Info" onPress={() => alert('Info Window')} /> */
  }
};

class HomeScreen extends Component {
  render() {
    // drawerIcon: () => {<Image/>}
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {shadowColor: 'black'},
          headerTitleStyle: {marginLeft: 30},
        }}>
        <Stack.Screen
          name="Home"
          component={MainHomeDrawer}
          options={{
            headerLeft: () => (
              <Image
                style={{width: 80, resizeMode: 'contain', marginLeft: 15}}
                source={require('../assets/pics/upcy_logo.png')}
              />
            ),
            headerRight: () => <HeaderRight />,
            title: '홈',
          }}
        />
      </Stack.Navigator>
    );
  }
}
{
}

export default HomeScreen;
