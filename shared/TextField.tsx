import {View, TextInput} from 'react-native';
import React from 'react';

interface Props extends TextInput {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const TextField: React.FC<Props> = ({text, setText}) => {
  return (
    <View>
      <TextInput
        defaultValue={text}
        onChangeText={newText => setText(newText)}
      />
    </View>
  );
};

export default TextField;
