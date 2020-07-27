import { createStore, compose, applyMiddleware } from 'redux';
import { promiseMiddleware } from 'redux-promise';
import  reducers  from './../reducers';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore( reducers, {}, 
    composeEnhancers(applyMiddleware(promiseMiddleware)));