import {FlatList, SafeAreaView, View,} from 'react-native';
import React from 'react';
import LoveboxItem from './LoveboxItem';
import {LoveboxItemInterface} from '../../interfaces/LoveboxItemInterface';
import {SearchBar} from '@rneui/themed';
import {s} from 'react-native-wind';

const LoveboxItemContainer: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[s`bg-white`, {flex: 1}]}>
        <View style={{flex: 1}}>
          <SearchBar
            round
            lightTheme
            containerStyle={{
              backgroundColor: '#fff',
              height: 90,
              alignItems: "center",
              justifyContent: "center"
            }}
          />
        </View>
        <View style={{flex: 6}}>
          <FlatList
            data={mockData}
            renderItem={({item}) => <LoveboxItem {...item} />}
            keyExtractor={item => String(item.id)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoveboxItemContainer;

const mockData: LoveboxItemInterface[] = [
  {id: 1, title: 'Dreams come true'},
  {id: 1, title: 'Dreams come true'},
  {id: 1, title: 'Dreams come true'},
  {id: 1, title: 'Dreams come true'},
  {id: 1, title: 'Dreams come true'},
  {id: 1, title: 'Dreams come true'},
  {id: 1, title: 'Dreams come true'},
  {id: 1, title: 'Dreams come true'},
  {id: 1, title: 'Dreams come true'},
  {id: 1, title: 'Dreams come true'},
  {id: 1, title: 'Dreams come true'},
  {id: 1, title: 'Dreams come true'},
  {id: 1, title: 'Dreams come true'},
  {id: 1, title: 'Dreams come true'},
  {id: 1, title: 'Dreams come true'},
  {id: 1, title: 'Dreams come true'},
  {id: 1, title: 'Dreams come true'},
  {id: 1, title: 'Dreams come true'},
  {id: 1, title: 'Dreams come true'},
  {id: 1, title: 'Dreams come true'},
  {id: 1, title: 'Dreams come true'},
];
