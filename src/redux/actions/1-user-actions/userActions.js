import {userConstants} from '../../constants/1-user-Constant/userActionTypes';
import {userService} from '../../services';

export const userActions = {
       getUsers,
};
function getUsers() {
  return dispatch => {
    dispatch(request());
    return userService.getUserList()
    .then(response => {
      dispatch(success( response.data));
    })
    .catch(function (error) {  
      dispatch(failure(error.response));
    })
  };

  function request() { return { type: userConstants.GET_USERS_REQUEST } }
  function success(users) { return { type: userConstants.GET_USERS_SUCCESS, users } }
  function failure(error) { return { type: userConstants.GET_USERS_FAILURE, error } }
}

