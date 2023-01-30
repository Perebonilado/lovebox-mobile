import React from 'react';
import {s} from 'react-native-wind';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LoginForm: React.FC = () => {
  const navigation: any = useNavigation();

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
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={[
            s`w-full h-13 px-8 py-4 mb-4 border-2 border-gray-300 rounded-full`,
            {fontSize: 20},
          ]}
        />
        <TouchableOpacity>
          <View
            style={[s`rounded-full py-3 mb-4`, {backgroundColor: '#ff9768'}]}>
            <Text style={[s`text-white text-center`, {fontSize: 20}]}>
              Login
            </Text>
          </View>
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
