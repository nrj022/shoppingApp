/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class HomeEventScreen extends Component {
  render() {
    return (
      <View
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>This is a Event tab!</Text>
      </View>
    );
  }
}

export default HomeEventScreen;
