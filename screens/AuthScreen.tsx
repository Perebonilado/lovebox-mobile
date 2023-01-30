import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {s} from 'react-native-wind';
import {SafeAreaView} from 'react-native-safe-area-context';
import LoginForm from '../modules/Auth/LoginForm';
import SignupForm from '../modules/Auth/SignupForm';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <SafeAreaView>
      <View style={[s`border-red-500 border-5 h-full bg-gray-300`]}>
        <View style={[{flex: 1}]}>
          <ImageBackground
            source={{
              uri: 'https://res.cloudinary.com/dt0wfaxft/image/upload/v1674931309/boho-style-g797b491c6_1920_ocpcwv.png',
            }}
            style={{flex: 1, justifyContent: 'space-between'}}
            resizeMode="cover">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={[s`justify-center items-center`, {flex: 2}]}>
                <Text style={s`font-black text-6xl`}>Lovebox</Text>
              </View>
            </TouchableWithoutFeedback>

            <View
              style={[
                s`bg-white p-4 pt-10`,
                {borderTopRightRadius: 50, borderTopLeftRadius: 50, flex: 5},
              ]}>
              <Stack.Navigator>
                <Stack.Screen
                  name="login-form"
                  component={LoginForm}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="signup-form"
                  component={SignupForm}
                  options={{
                    headerShown: false,
                  }}
                />
              </Stack.Navigator>
            </View>
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
