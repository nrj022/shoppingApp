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

class TabAboutScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>This is About Tab Screen</Text>
      </View>
    );
  }
}

export default TabAboutScreen;
