import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';
import { apiget } from './../api';
import { urlCustomers } from './../api/urls';


export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiget(urlCustomers));
