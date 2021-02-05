/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import SplashScreen from 'react-native-splash-screen'

setTimeout(() => {
  SplashScreen.hide();
}, 1500)

AppRegistry.registerComponent(appName, () => App);
