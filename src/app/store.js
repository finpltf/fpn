import { combineReducers, createStore } from 'redux';
import {
  newOrderTableReducer,
  sidebarReducer,
  themeReducer,
  customizerReducer,
  api
} from '../redux/reducers/index';

const reducer = combineReducers({
  api: api, // mounted under "form",
  theme: themeReducer,
  sidebar: sidebarReducer,
  newOrder: newOrderTableReducer,
  customizer: customizerReducer
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;
