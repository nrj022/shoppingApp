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

const storeList1 = [
  {
    name: 'MESSENGER MEDIUM',
    brand: 'FREITAG',
    price: '346,000',
    image: require(''),
  },
  {name: 'POUCH EXTRA SMALL', brand: '', price: '44,000', image: require('')},
  {
    name: 'Back pleats hybrid T-shirt',
    brand: 'RE;CODE',
    price: '190,000',
    image: require(''),
  },
  {
    name: 'Recycled fabric shorts',
    brand: '',
    price: '99,000',
    image: require(''),
  },
];
const storeList2 = [
  {
    name: 'airbag packable back-pack (S)',
    brand: '',
    price: '',
    image: require(''),
  },
  {
    name: 'LABEL_FRAME CLUTCH_HASSAM',
    brand: 'UL:KIN',
    price: '188,000',
    image: require(''),
  },
  {
    name: '챌린저백 / challenger bag',
    brand: '119REO',
    price: '98,000',
    image: require(''),
  },
  {name: 'REO893 토트백 ', brand: '', price: '220,000', image: require('')},
];

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
              backgroundColor: 'white',
            }}>
            {`플라스틱 방앗간과 함께\n병뚜껑 모으기`}
          </Text>
          <Text
            style={{
              fontSize: 15,
              position: 'absolute',
              top: 80,
              left: 30,
              backgroundColor: 'white',
            }}>
            {`이벤트 바로가기 >`}
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
