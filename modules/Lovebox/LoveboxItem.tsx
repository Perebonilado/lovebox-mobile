import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {s} from 'react-native-wind';
import {Icon} from '@rneui/themed';
import {LoveboxItemInterface} from '../../interfaces/LoveboxItemInterface';

const LoveboxItem: React.FC<LoveboxItemInterface> = ({id, title}) => {
  return (
    <TouchableOpacity>
      <View
        style={[
          s`h-20`,
          {
            borderBottomColor: 'lightgrey',
            borderBottomWidth: 1,
            flexDirection: 'row',
          },
        ]}>
        <View style={[s`justify-center px-6`, {flex: 1, flexDirection: 'row'}]}>
          <View style={[s`items-start justify-center pl-2`, {flex: 1}]}>
            <Icon
              name="heartbeat"
              type="font-awesome"
              color="#ff9768"
              onPress={() => console.log('hello')}
            />
          </View>
          <View style={[s`items-start justify-center pl-1 pr-4`, {flex: 5}]}>
            <Text
              style={[s`text-lg font-bold text-black`]}
              numberOfLines={1}
              ellipsizeMode="tail">
              {title}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LoveboxItem;
