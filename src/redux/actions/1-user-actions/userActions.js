import {userConstants, addUserConstants,changeAuthUser} from '../../constants/1-user-Constant/userActionTypes';
import {userService} from '../../services';

export const userActions = {
       getUsers,
       addUser,
       changeAuthUserData
};
/*------------------------------------------------
                                                  GET USER
                                                  ------------------------------------------------*/
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
/*------------------------------------------------
                                                  ADD USER
                                                  ------------------------------------------------------*/
function addUser(user) {
    console.log('action',user);
    return dispatch => {
        dispatch(request());
        return userService.addUserInUserList(user)
            .then(response => {
                // dispatch(success( response.data));
            })
            .catch(function (error) {
                console.log('action',error);
                // dispatch(failure(error.response));
            })
    };

    function request() { return { type: addUserConstants.ADD_USER_REQUEST } }
    function success(user) { return { type: addUserConstants.ADD_USER_SUCCESS, user } }
    function failure(error) { return { type: addUserConstants.ADD_USER_SUCCESS, error } }
}
/*------------------------------------------------
                                                  AUTH USER
                                                  ------------------------------------------------------*/
function changeAuthUserData(authUser) {
        return dispatch => {
        if (authUser) {
            dispatch({ type: changeAuthUser.CHANGE_AUTH_USER_SUCCESS, authUser })
        }
    };
}

