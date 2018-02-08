import { AsyncStorage } from 'react-native';

import {
  FACEBOOK_LOGIN_SUCCESS
} from './types'

// AsyncStorage.setItem ('fb_token',token);
// AsyncStorage.getItem ('fb_token');
// Async returns a Promise, we need hanlde the promoise
// Async await system looks like a sync nature call
export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem ('fb_token');
  if (token) {
    // Dispatch an action saying FB is login done
  }else{
    //start up Fb login process here
  }
}
