/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import StoreAllScreen from './store_all_tab';
import StoreBookmarkScreen from './store_bookmark_tab';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const StoreAllTab = () => {
  const cates = [
    {name: '의류', key: 1, iconName: 'shirt-outline', color: '#fd5a62'},
    {name: '안경', key: 2, iconName: 'glasses-outline', color: '#ff8800'},
    {name: '문구', key: 3, iconName: 'cut-outline', color: '#ffff84'},
    {name: '시계', key: 4, iconName: 'watch-outline', color: '#94c688'},
    {name: '미술', key: 5, iconName: 'color-palette-outline', color: '#00aefe'},
    {name: '생활', key: 6, iconName: 'alarm-outline', color: '#9d7efe'},
    {name: '스포츠', key: 7, iconName: 'baseball-outline', color: '#f88eae'},
  ];
  const cateList = cates.map(cate => (
    <View
      style={{
        width: 60,
        height: 60,
        marginHorizontal: 15,
        alignItems: 'center',
      }}>
      <Ionicons
        style={{
          fontSize: 40,
          backgroundColor: 'skyblue',
          borderRadius: 10,
          padding: 5,
        }}
        color="white"
        key={cate.key}
        name={cate.iconName}
      />
      <Text>{cate.name}</Text>
    </View>
  ));
  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{height: 100, margin: 15}}>
        {cateList}
      </ScrollView>
      <View></View>
    </View>
  );
};

const MainStore = () => {
  return (
    <Tab.Navigator
      initialRouteName="All"
      tabBarOptions={{
        labelStyle: {fontSize: 15},
      }}>
      <Tab.Screen
        name="All"
        component={StoreAllTab}
        options={{tabBarLabel: '전체'}}
      />
      <Tab.Screen
        name="Bookmark"
        component={StoreBookmarkScreen}
        options={{tabBarLabel: '즐겨찾기'}}
      />
    </Tab.Navigator>
  );
};

const HeaderRight = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        style={{width: 20, resizeMode: 'contain', marginRight: 10}}
        source={require('../assets/pics/hashtag.png')}
      />
      <Image
        style={{width: 20, resizeMode: 'contain', marginRight: 10}}
        source={require('../assets/pics/search.png')}
      />
      <Image
        style={{width: 23, resizeMode: 'contain', marginRight: 10}}
        source={require('../assets/pics/shopping-bag.png')}
      />
    </View>
  );
};

class TabStoreScreen extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {shadowColor: 'black'},
          headerTitleStyle: {marginLeft: 20},
        }}>
        <Stack.Screen
          name="Store"
          component={MainStore}
          options={{
            title: '매장',
            headerLeft: () => (
              <Image
                style={{width: 80, resizeMode: 'contain', marginLeft: 10}}
                source={require('../assets/pics/upcy_logo.png')}
              />
            ),
            headerRight: () => <HeaderRight />,
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default TabStoreScreen;
