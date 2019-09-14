import axios from 'axios';
import { createAction } from 'redux-actions';

import routes from '../routes';

export const fetchRatesRequest = createAction('RATES_FETCH_REQUEST');
export const fetchRatesSuccess = createAction('RATES_FETCH_SUCCESS');
export const fetchRatesFailure = createAction('RATES_FETCH_FAILURE');

export const fetchRates = () => async (dispatch) => {
  dispatch(fetchRatesRequest());
  try {
    const url = routes.ratesUrl();
    const response = await axios.get(url);
    dispatch(fetchRatesSuccess({ rates: response.data }));
  } catch (e) {
    dispatch(fetchRatesFailure());
    throw e;
  }
};
