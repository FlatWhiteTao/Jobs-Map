import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from './types'

// AsyncStorage.setItem ('fb_token',token);
// AsyncStorage.getItem ('fb_token');
// Async returns a Promise, we need hanlde the promoise
// Async await system looks like a sync nature call
export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem ('fb_token');
  if (token) {
    // Dispatch an action saying FB login done
    // use payload to cache the token to the redux store
    dispatch ({ type: FACEBOOK_LOGIN_SUCCESS, payload: token});
  }else{
    //start up Fb login process here
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async (dispatch) => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync('576904529322770',{
    permissions: ['public_profile']
  });

  // something went wrong
  if (type === 'cancel') {
    return dispatch ({ type: FACEBOOK_LOGIN_FAIL });
  }
  await AsyncStorage.setItem('fb_token', token);
  dispatch ({ type: FACEBOOK_LOGIN_SUCCESS, payload: token});
};
