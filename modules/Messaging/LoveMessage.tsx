import {View, Text} from 'react-native';
import React from 'react';
import {s} from 'react-native-wind';

interface Props {
  username: string;
  message: string;
}

const LoveMessage: React.FC<Props> = ({username, message}) => {
  return (
    <View style={s`p-4 rounded-lg bg-black mb-3`}>
      <View>
        <Text style={s`text-white`}>{username}</Text>
      </View>
      <View>
        <Text style={s`text-white`}>{message}</Text>
      </View>
    </View>
  );
};

export default LoveMessage;
