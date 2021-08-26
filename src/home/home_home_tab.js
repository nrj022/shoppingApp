/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Text, View, Image, ImageBackground, ScrollView} from 'react-native';

/* HomeEventContent = props => {
  return <ImageBackground source={require('../assets/pics/upcy_logo.png')} />;
}; */

const storeList1 = [
  {
    name: 'MESSENGER MEDIUM',
    brand: 'FREITAG',
    price: '346,000',
    image: require('../src/assets/pics/freitag_messenger.jpg'),
  },
  {
    name: 'POUCH EXTRA SMALL',
    brand: 'FREITAG',
    price: '44,000',
    image: require('../src/assets/pics/freitag_pouch.jpg'),
  },
  {
    name: 'Back pleats hybrid T-shirt',
    brand: 'RE;CODE',
    price: '190,000',
    image: require('../src/assets/pics/re;code_tshirt.jpg'),
  },
  {
    name: 'REO893 토트백 ',
    brand: '119REO',
    price: '220,000',
    image: require('../src/assets/pics/119reo_totbag.png'),
  },
];
const storeList2 = [
  {
    name: 'airbag packable back-pack (S)',
    brand: 'RE;CODE',
    price: '149,000',
    image: require('../src/assets/pics/re;code_bag.jpg'),
  },
  {
    name: 'LABEL_FRAME CLUTCH_HASSAM',
    brand: 'UL:KIN',
    price: '188,000',
    image: require('../src/assets/pics/ulkin_clutch.jpg'),
  },
  {
    name: '챌린저백 / challenger bag',
    brand: '119REO',
    price: '98,000',
    image: require('../src/assets/pics/119reo_bag.png'),
  },
  {
    name: 'Recycled fabric shorts',
    brand: 'RE;CODE',
    price: '99,000',
    image: require('../src/assets/pics/re;code_shorts.jpg'),
  },
];

const storeColumn1 = storeList1.map(store => {
  <View style={{marginBottom: 20}}>
    <Image
      style={{width: 200, height: 200, marginBottom: 20}}
      source={store.image}
    />
    <Text style={{fontSize: 15, fontWeight: 700}}>{store.name}</Text>
    <Text>{store.brand}</Text>
    <Text>{store.price}</Text>
  </View>;
});
const storeColumn2 = storeList2.map(store => {
  <View style={{marginBottom: 20}}>
    <Image
      style={{width: 200, height: 200, marginBottom: 20}}
      source={store.image}
    />
    <Text style={{fontSize: 15, fontWeight: 700}}>{store.name}</Text>
    <Text>{store.brand}</Text>
    <Text>{store.price}</Text>
  </View>;
});

class HomeHomeScreen extends Component {
  render() {
    return (
      <View style={{margin: 15}}>
        <ImageBackground
          source={require('../assets/pics/plastic_mill.png')}
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginTop: 20, paddingBottom: 150, paddingHorizontal: 20}}>
          <storeColumn1 />
          <storeColumn2 />
        </ScrollView>
      </View>
    );
  }
}

export default HomeHomeScreen;
