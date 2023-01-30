import React, {useState, useEffect} from 'react';
import {s} from 'react-native-wind';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {useLoginMutation} from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';

const LoginForm: React.FC = () => {
  const navigation: any = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [login, {data, isLoading, isError, error}] = useLoginMutation();
  const { setToken } = useAuthContext()

  useEffect(()=>{
    if(data){
      setToken(data.access_token)
    }
  },[data])

  return (
    <View style={s`bg-white h-full`}>
      <Text style={s`text-center mb-4 font-black text-2xl`}>Welcome back</Text>
      <ScrollView>
        <TextInput
          placeholder="Email"
          style={[
            s`w-full h-13  px-8 mb-4 border-2 border-gray-300 rounded-full`,
            {fontSize: 20},
          ]}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={[
            s`w-full h-13 px-8 py-4 mb-4 border-2 border-gray-300 rounded-full`,
            {fontSize: 20},
          ]}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity>
          <Button
            onPress={() => login({email, password})}
            buttonStyle={{borderRadius: 20}}
            color={'#ff9768'}>
            Login
          </Button>
        </TouchableOpacity>
      </ScrollView>

      <View style={s`bg-white`}>
        <Text style={[s`text-center`]}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('signup-form')}>
          <Text style={[s`text-center`, {color: '#ff9768'}]}>
            Create an account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;
