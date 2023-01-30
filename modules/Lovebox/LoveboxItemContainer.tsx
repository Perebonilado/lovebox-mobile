import {
  FlatList,
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import LoveboxItem from './LoveboxItem';
import {LoveboxItemInterface} from '../../interfaces/LoveboxItemInterface';
import {s} from 'react-native-wind';
import {useAuthContext} from '../../contexts/AuthContext';
import {useRetrieveLoveboxesQuery} from '../../services/loveboxService';

const LoveboxItemContainer: React.FC = () => {
  const {token} = useAuthContext();
  const {data, isLoading, isError, error} = useRetrieveLoveboxesQuery(
    {
      token: token || '',
    },
    {
      skip: !token,
    },
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[s`bg-white`, {flex: 1}]}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={{flex: 1}}>
            <ScrollView>
              {data?.data?.map(item => (
                <LoveboxItem key={item._id} id={item._id} title={item.title} />
              ))}
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default LoveboxItemContainer;

const mockData: LoveboxItemInterface[] = [
  {id: 1, title: 'Dreams come true'},
  {id: 2, title: 'Dreams come true'},
  {id: 3, title: 'Dreams come true'},
  {id: 4, title: 'Dreams come true'},
  {id: 5, title: 'Dreams come true'},
  {id: 6, title: 'Dreams come true'},
  {id: 7, title: 'Dreams come true'},
  {id: 8, title: 'Dreams come true'},
  {id: 9, title: 'Dreams come true'},
  {id: 10, title: 'Dreams come true'},
  {id: 11, title: 'Dreams come true'},
  {id: 12, title: 'Dreams come true'},
  {id: 13, title: 'Dreams come true'},
  {id: 14, title: 'Dreams come true'},
  {id: 15, title: 'Dreams come true'},
  {id: 16, title: 'Dreams come true'},
  {id: 17, title: 'Dreams come true'},
  {id: 18, title: 'Dreams come true'},
  {id: 19, title: 'Dreams come true'},
  {id: 20, title: 'Dreams come true'},
  {id: 21, title: 'Dreams come true'},
];
