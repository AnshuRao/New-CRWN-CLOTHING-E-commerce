//TYPES OF ACTIONS
import {USER_ACTION_TYPES} from './user.types';


  const INITIAL_STATE = {
    currentUser: null,
    isLoading : false,
    error : null
  };

  //Creating REDUCER
  export const userReducer = (state=INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {

      case USER_ACTION_TYPES.SET_CURRENTUSER_ON_SUCCESS:
        return {
          ...state,
          currentUser:payload
        }
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
          return {
            ...state,
            error: payload
          }


      default:
        return state;
    }
  };
  