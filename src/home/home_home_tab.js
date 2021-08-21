/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';

/* HomeEventContent = props => {
  return <ImageBackground source={require('../assets/pics/upcy_logo.png')} />;
}; */

class HomeHomeScreen extends Component {
  render() {
    return (
      <View style={{margin: 15}}>
        <ImageBackground
          source={require('../assets/pics/flower.jpg')}
          // imageBackground는 height, width 설정 필수
          style={{
            position: 'relative',
            alignItems: 'center',
            width: '100%',
            height: 230,
            borderRadius: 30,
            overflow: 'hidden',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              position: 'absolute',
              top: 20,
              left: 30,
            }}>
            {`참새 방앗간과 함께\n병뚜껑 모으기`}
          </Text>
        </ImageBackground>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
          }}>
          <View>
            <Image
              style={{width: 200, height: 200, marginBottom: 20}}
              source={require('../assets/pics/flower-re.jpg')}
            />
            <Image
              style={{width: 200, height: 200, marginBottom: 20}}
              source={require('../assets/pics/flower-re.jpg')}
            />
            <Image
              style={{width: 200, height: 200, marginBottom: 20}}
              source={require('../assets/pics/flower-re.jpg')}
            />
            <Image
              style={{width: 200, height: 200, marginBottom: 20}}
              source={require('../assets/pics/flower-re.jpg')}
            />
            <Image
              style={{width: 200, height: 200, marginBottom: 20}}
              source={require('../assets/pics/flower-re.jpg')}
            />
          </View>
          <View>
            <Image
              style={{width: 200, height: 200, marginBottom: 20}}
              source={require('../assets/pics/flower-re.jpg')}
            />
            <Image
              style={{width: 200, height: 200, marginBottom: 20}}
              source={require('../assets/pics/flower-re.jpg')}
            />
            <Image
              style={{width: 200, height: 200, marginBottom: 20}}
              source={require('../assets/pics/flower-re.jpg')}
            />
            <Image
              style={{width: 200, height: 200, marginBottom: 20}}
              source={require('../assets/pics/flower-re.jpg')}
            />
            <Image
              style={{width: 200, height: 200, marginBottom: 20}}
              source={require('../assets/pics/flower-re.jpg')}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default HomeHomeScreen;
