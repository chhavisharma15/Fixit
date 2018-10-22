import { createStackNavigator } from 'react-navigation';
import LoggedOut from '../screens/LoggedOut';
import LogIn from '../screens/LogIn';
import ForgotPassword from '../screens/ForgotPassword';
import LoggedInTabNavigator from './LoggedInTabNavigator';

const AppRouteConfigs = createStackNavigator({
  LoggedOut: { screen: LoggedOut },
  LoggedIn: {
    screen: LoggedInTabNavigator,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
  LogIn: { screen: LogIn },
  ForgotPassword: { screen: ForgotPassword }
});

export default AppRouteConfigs;
