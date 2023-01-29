import React from 'react';
import {s} from 'react-native-wind';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SignupForm: React.FC = () => {
  const navigation: any = useNavigation();
  return (
    <View style={s`bg-white h-full`}>
      <ScrollView>
        <Text style={s`text-center mb-4 font-black text-2xl`}>
          Create Account
        </Text>
        <TextInput
          placeholder="Email"
          style={[
            s`w-full h-13 py-4 px-8 mb-4 border-2 border-gray-300 rounded-full`,
            {fontSize: 20},
          ]}
        />
        <TextInput
          placeholder="Username"
          style={[
            s`w-full h-13 py-4 px-8 mb-4 border-2 border-gray-300 rounded-full`,
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
        <TextInput
          secureTextEntry={true}
          placeholder="Confirm Password"
          style={[
            s`w-full h-13 px-8 py-4 mb-4 border-2 border-gray-300 rounded-full`,
            {fontSize: 20},
          ]}
        />
        <TouchableOpacity>
          <View
            style={[s`rounded-full py-3 mb-4`, {backgroundColor: '#ff9768'}]}>
            <Text style={[s`text-white text-center`, {fontSize: 20}]}>
              Create Account
            </Text>
          </View>
        </TouchableOpacity>

        <View style={s`bg-white`}>
          <Text style={[s`text-center`]}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('login-form')}>
            <Text style={[s`text-center`, {color: '#ff9768'}]}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignupForm;
