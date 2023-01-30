import {View,  ScrollView} from 'react-native';
import React from 'react';
import LoveMessage from './LoveMessage';
import {s} from 'react-native-wind';

interface Props {
  data?: {username: string, message: string}[]
}

const LoveMessageContainer: React.FC<Props> = ({data}) => {
  return (
    <View style={s`p-4`}>
      <ScrollView>
        {data?.map((item, index)=>{
          return <LoveMessage {...item} key={index}/>
        })}
      </ScrollView>
    </View>
  );
};

export default LoveMessageContainer;
