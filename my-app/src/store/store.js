import { legacy_createStore as createStore } from 'redux';
import { appReduser } from './reducer';

export const store = createStore(appReduser);
