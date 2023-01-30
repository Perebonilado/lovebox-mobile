import {View, KeyboardAvoidingView, Platform, Keyboard} from 'react-native';
import React, {useState} from 'react';
import {s} from 'react-native-wind';
import LoveMessageContainer from '../modules/Messaging/LoveMessageContainer';
import SendMessage from '../modules/Messaging/SendMessage';
import LoveMessageHeader from '../modules/Messaging/LoveMessageHeader';

const messageData = [
  {username: 'Mylo', message: 'I hope you have a beautiful day today'},
  {username: 'Mylo', message: 'I hope you have a beautiful day today'},
  {username: 'Mylo', message: 'I hope you have a beautiful day today'},
];

const LoveboxScreen: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [mockData, setMockData] = useState(messageData);

  const handleMessageSend = () => {
    setMockData([...mockData, {username: 'Mylo', message: message}]);
    setMessage("")
    Keyboard.dismiss()
  };

  const handleMessageChange = (message: string) => {
    setMessage(message);
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={[s`h-full bg-white`, {flex: 1, flexDirection: 'column'}]}>
        <View
          style={{
            flex: 1,
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            maxHeight: 60,
          }}>
          <LoveMessageHeader />
        </View>

        <View style={{flex: 6}}>
          <LoveMessageContainer data={mockData} />
        </View>

        <View
          style={{
            flex: 1,
            borderTopColor: 'grey',
            borderTopWidth: 1,
            flexDirection: 'row',
            paddingVertical: 4,
            maxHeight: 60,
          }}>
          <SendMessage
            text={message}
            handleTextChange={text => handleMessageChange(text)}
            handleSendText={handleMessageSend}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoveboxScreen;
