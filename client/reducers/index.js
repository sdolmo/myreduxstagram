// Redux can only have one reducer, so this will be the the main reducer file
// This file is imported in the store.js file on line 6

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({posts, comments, router: routerReducer});

export default rootReducer;
