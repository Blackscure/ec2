import axios from 'axios';

import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../action-types/registrationActionTypes';

export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const registerSuccess = (message) => ({
  type: REGISTER_SUCCESS,
  payload: { message },
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: { error },
});

export const registerUser = (userData) => async (dispatch) => {
  dispatch(registerRequest());

  try {
    const response = await axios.post('http://localhost:8000/apps/ec1/api/v1/authentication/register/', userData);

    if (response.data.status) {
      dispatch(registerSuccess(response.data.message));
      // Redirect or navigate to another page here
    } else {
      dispatch(registerFailure('Registration failed. Please check your details and try again.'));
    }
  } catch (error) {
    console.error('Registration failed:', error);
    dispatch(registerFailure('An error occurred during registration. Please try again later.'));
  }
};
