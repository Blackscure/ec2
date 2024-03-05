import { combineReducers } from 'redux';

import registrationReducer from '../sections/register/reducers/registrationReducer';

// Import your individual reducers here

const rootReducer = combineReducers({
  registration: registrationReducer,

});

export default rootReducer;
