/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import {useAuthContext} from './contexts/AuthContext';

import Screens from './navigation/Navigation';
import SplashScreen from './screens/SplashScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const {token, isLoading} = useAuthContext();
  const {authScreens, nonAuthScreens} = Screens;

  if (isLoading) return <SplashScreen />;
  else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {token ? (
            <>
              {authScreens.map((screen, index) => {
                return (
                  <Stack.Screen
                    name={screen.title}
                    component={screen.component}
                    key={index}
                    options={{headerShown: false}}
                  />
                );
              })}
            </>
          ) : (
            <>
              {nonAuthScreens.map((screen, index) => {
                return (
                  <Stack.Screen
                    name={screen.title}
                    component={screen.component}
                    key={index}
                    options={{headerShown: false}}
                  />
                );
              })}
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
