/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

MainWish = () => {
  return (
    <View style={{height: '100%'}}>
      <View
        style={{
          backgroundColor: 'white',
          borderBottomWidth: 20,
          borderBottomColor: '#F7F9FA',

          flex: 1,
        }}>
        <Text>최근 본 상품</Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          flex: 3,
        }}>
        <Text>나의 위시리스트</Text>
      </View>
    </View>
  );
};

class TabWishScreen extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {shadowColor: 'black'},
          headerTitleStyle: {marginLeft: 30},
        }}>
        <Stack.Screen
          name="Wish"
          component={MainWish}
          options={{
            title: '찜',
            headerLeft: () => (
              <Image
                style={{width: 80, resizeMode: 'contain', marginLeft: 15}}
                source={require('./assets/pics/upcy_logo.png')}
              />
            ),
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default TabWishScreen;
