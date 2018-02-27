import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';

import {
  FETCH_JOBS
} from './types';

export const fetchJobs = (region) => async (dispatch) => {
  try {
    let zip = await reverseGeocode(region);
  } catch (e) {
    console.error(e);
  } finally {

  }
};
