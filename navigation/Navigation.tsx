import HomeScreen from '../screens/HomeScreen';
import AuthScreen from '../screens/AuthScreen';
import LoveboxScreen from '../screens/LoveboxScreen';

interface ScreenItem {
  component: React.FC;
  title: string;
  options?: {
    presentation: any;
  };
}

interface Screen {
  authScreens: ScreenItem[];
  nonAuthScreens: ScreenItem[];
}

const Screens: Screen = {
  authScreens: [
    {title: 'Home', component: HomeScreen},
    {
      title: 'Lovebox',
      component: LoveboxScreen,
      options: {presentation: 'modal'},
    },
  ],
  nonAuthScreens: [{title: 'Auth', component: AuthScreen}],
};

export default Screens;
