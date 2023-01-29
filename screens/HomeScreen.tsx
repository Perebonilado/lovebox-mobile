import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {s} from 'react-native-wind';
import {Icon} from '@rneui/themed';
import LoveboxItemContainer from '../modules/Lovebox/LoveboxItemContainer';

const HomeScreen: React.FC = () => {
  return (
    <View style={[s`h-full bg-white`, {flexDirection: 'column'}]}>
      <View
        style={[
          s`bg-white`,
          {
            flex: 1,
            flexDirection: 'row',
            borderBottomColor: 'lightgray',
            borderBottomWidth: 1,
          },
        ]}>
        <View style={[s`bg-white items-center justify-center`, {flex: 1}]}>
          <Text
            style={s`h-12 w-12 text-center bg-gray-300 rounded-full p-2 text-black text-lg`}>
            M
          </Text>
        </View>
        <View style={[s`bg-white items-center justify-center`, {flex: 3}]}>
          <Text style={[s`font-extrabold text-3xl text-black`]}>
            Loveboxes{' '}
          </Text>
        </View>
        <View style={[s`bg-white items-center justify-center`, {flex: 1}]}>
          <Icon
            raised
            name="plus"
            type="font-awesome"
            color="#000"
            onPress={() => console.log('hello')}
          />
        </View>
      </View>

      <View style={[s`bg-blue`, {flex: 7}]}>
        <LoveboxItemContainer />
      </View>

      <View
        style={[
          s`bg-blue`,
          {
            borderTopColor: 'lightgrey',
            borderTopWidth: 1,
            flex: 1,
            flexDirection: 'row',
          },
        ]}>
        <View
          style={[
            s`bg-white items-center justify-center`,
            {flex: 1, borderRightColor: 'lightgray', borderRightWidth: 1},
          ]}>
          <Icon
            raised
            name="message"
            color="#000"
            onPress={() => console.log('hello')}
          />
        </View>
        <View style={[s`bg-white items-center justify-center`, {flex: 1}]}>
          <Icon
            raised
            name="person"
            color="#000"
            onPress={() => console.log('hello')}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
