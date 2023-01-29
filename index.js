/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AuthProvider from './contexts/AuthContext';
import {store} from './config/store';
import {Provider as ReduxProvider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Main = () => {
  return (
    <ReduxProvider store={store}>
      <AuthProvider>
        <SafeAreaProvider>
          <App />
        </SafeAreaProvider>
      </AuthProvider>
    </ReduxProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
