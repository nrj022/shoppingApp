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

MainMy = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is My Tab Screen</Text>
    </View>
  );
};

class TabMyScreen extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {shadowColor: 'black'},
          headerTitleStyle: {marginLeft: 30},
        }}>
        <Stack.Screen
          name="My"
          component={MainMy}
          options={{
            title: '마이페이지',
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

export default TabMyScreen;
