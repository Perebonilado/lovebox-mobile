import HomeScreen from '../screens/HomeScreen';
import AuthScreen from '../screens/AuthScreen';

interface ScreenItem {
  component: React.FC;
  title: string;
}

interface Screen {
  authScreens: ScreenItem[];
  nonAuthScreens: ScreenItem[];
}

const Screens: Screen = {
  authScreens: [{title: 'Home', component: HomeScreen}],
  nonAuthScreens: [
    {title: 'Auth', component: AuthScreen},
  ],
};

export default Screens
