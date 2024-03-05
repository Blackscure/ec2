import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../action-types/registrationActionTypes';

const initialState = {
  loading: false,
  message: '',
  error: '',
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, loading: true, error: '' };

    case REGISTER_SUCCESS:
      return { ...state, loading: false, message: action.payload.message };

    case REGISTER_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
};

export default registrationReducer;
