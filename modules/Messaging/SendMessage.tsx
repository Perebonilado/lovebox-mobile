import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {Icon, Button} from '@rneui/themed';
import {s} from 'react-native-wind';

interface Props {
  text: string;
  handleTextChange: (text: string) => void;
  handleSendText: () => void;
}

const SendMessage: React.FC<Props> = ({
  text,
  handleSendText,
  handleTextChange,
}) => {
  return (
    <>
      <View
        style={{
          flex: 5,
          flexDirection: 'row',
        }}>
        <View style={[s`items-center justify-center`, {flex: 1}]}>
          <Icon name="comment" />
        </View>
        <View style={{flex: 6}}>
          <TextInput
            style={[
              s`w-full h-full rounded-3xl px-4`,
              {borderWidth: 1, fontSize: 15, borderColor: 'grey'},
            ]}
            placeholder="Enter love message"
            value={text}
            onChangeText={text => handleTextChange(text)}
          />
        </View>
      </View>
      <View style={[s`items-center justify-center`, {flex: 1}]}>
        <Button
          radius={'xl'}
          type="solid"
          color={'#ff9768'}
          onPress={handleSendText}>
          <Icon name="send" color="white" />
        </Button>
      </View>
    </>
  );
};

export default SendMessage;
