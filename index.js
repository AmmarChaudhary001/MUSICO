/**
 * @format
 */

import TrackPlayer from '@rntp/player';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import {serviceplayer} from './playerservice.js'

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerBackgroundEventHandler(()=>require('./playerservice.js'))
