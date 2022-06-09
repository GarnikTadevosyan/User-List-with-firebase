import {addUserConstants, userConstants,changeAuthUser} from "../../constants/1-user-Constant/userActionTypes";

const initialState = {
  loading: false,
  users: [],
  authUser:null,
};

export function userReducer(state = initialState, payload) {
  switch (payload.type) {
    case userConstants.GET_USERS_REQUEST:
      return {
        ...state,
        users:[]
      };
    case userConstants.GET_USERS_SUCCESS:
      return {
        ...state,
        users:payload.users,
      };
    case userConstants.GET_USERS_FAILURE:
      return {
        ...state
      };
    case changeAuthUser.CHANGE_AUTH_USER_REQUEST:
      return {
        ...state,
        authUser: null
      };
    case changeAuthUser.CHANGE_AUTH_USER_SUCCESS:
      return {
        ...state,
        authUser:payload.authUser,
      };
    case changeAuthUser.CHANGE_AUTH_USER_FAILURE:
      return {
        ...state,
        authUser: null
      };
    case addUserConstants.ADD_USER_REQUEST:
      return {
        ...state,
        users:[]
      };
    case addUserConstants.ADD_USER_SUCCESS:
      return {
        ...state,
        users: payload.users,
      };
    case addUserConstants.ADD_USER_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
}


