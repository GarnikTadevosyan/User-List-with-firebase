import {
  userAlbumsConstants,
  userConstants,
  userPostsConstants,
  userCommentsConstants,
  userPhotosConstants,
  deleteUserPhotoConstants,
  deleteCommentConstants,
  editCommentsConstans,
  addCommentsConstants
} from '../constants/actionTypes';
import {userService} from '../services';
export const userActions = {
       getUsers,
       getUserPosts,
       getUserComments,
       getUserAlbums,
       deleteUserPhoto,
       deleteUserComment,
       editUserComment,
       addUserComment,
       getUserPhotos,
};
/* ------------------------------------------------------Users------------------------------------------------------------*/

function getUsers() {
  return dispatch => {
    dispatch(request());
    return userService.getUserList()
    .then(response => {
      console.log('actionner',response);
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

/* ------------------------------------------------------User Posts-------------------------------------------------------*/

function getUserPosts(id) {
  return dispatch => {
    dispatch(request());
    return userService.getUserPosts(id)
    .then(response => {
      dispatch(success(response.data));
    })
    .catch(function (error) {
      dispatch(failure(error.response));
    })
  };

  function request() { return { type: userPostsConstants.GET_POSTS_REQUEST } }
  function success(posts) { return { type: userPostsConstants.GET_POSTS_SUCCESS, posts } }
  function failure(error) { return { type: userPostsConstants.GET_POSTS_FAILURE, error } }
}
/* ------------------------------------------------------User Comments-------------------------------------------------------*/
function getUserComments(id) {
  return dispatch => {
    dispatch(request());
    return userService.getUserComments(id)
    .then(response => {
      dispatch(success(response.data));
    })
    .catch(function (error) {
      dispatch(failure(error.response));
    })
  };

  function request() { return { type: userCommentsConstants.GET_COMMENTS_REQUEST } }
  function success(posts) { return { type: userCommentsConstants.GET_COMMENTS_SUCCESS, posts } }
  function failure(error) { return { type: userCommentsConstants.GET_COMMENTS_FAILURE, error } }
}
/*__________________________User Comment Delete_______________________________________________*/
function deleteUserComment(id) {
  return dispatch => {
    dispatch(request());
    return userService.deleteUserComment(id)
        .then(() => {
          dispatch(success(id));
        })
        .catch(function (error) {
          dispatch(failure(error.response));
        })
  };

  function request() { return { type: deleteCommentConstants.DELETE_COMMENT_REQUEST} }
  function success(id) { return { type: deleteCommentConstants.DELETE_COMMENT_SUCCESS, id } }
  function failure(error) { return { type: deleteCommentConstants.DELETE_COMMENT_FAILURE, error } }
}
/*__________________________User Comment Edit_______________________________________________*/
function editUserComment(comment) {
  return dispatch => {
    dispatch(request());
    return userService.editUserComment(comment)
        .then(() => {
          dispatch(success(comment));
        })
        .catch(function (error) {
          dispatch(failure(error.response));
        })
  };

  function request() { return { type: editCommentsConstans.EDIT_COMMENT_REQUEST} }
  function success(comment) { return { type: editCommentsConstans.EDIT_COMMENT_SUCCESS, comment } }
  function failure(error) { return { type: editCommentsConstans.EDIT_COMMENT_FAILURE, error } }
}

/*__________________________User Comment Add_______________________________________________*/

function addUserComment(comment) {
  return dispatch => {
    dispatch(request());
    return userService.addUserComment(comment)
        .then(() => {
          dispatch(success(comment));
        })
        .catch(function (error) {
          dispatch(failure(error.response));
        })
  };

  function request() { return { type: addCommentsConstants.ADD_COMMENT_REQUEST} }
  function success(comment) { return { type: addCommentsConstants.ADD_COMMENT_SUCCESS, comment } }
  function failure(error) { return { type: addCommentsConstants.ADD_COMMENT_FAILURE, error } }
}

/* ------------------------------------------------------User Albums---------------------------------------------*/

function getUserAlbums(id) {
  return dispatch => {
    dispatch(request());
    return userService.getUserAlbums(id)
    .then(response => {
      dispatch(success(response.data));
    })
    .catch(function (error) {
      dispatch(failure(error.response));
    })
  };

  function request() { return { type: userAlbumsConstants.GET_ALBUMS_REQUEST } }
  function success(albums) { return { type: userAlbumsConstants.GET_ALBUMS_SUCCESS, albums } }
  function failure(error) { return { type: userAlbumsConstants.GET_ALBUMS_FAILURE, error } }
}

/* ------------------------------------------------------User Photos---------------------------------------------*/
function getUserPhotos(id) {
  return dispatch => {
    dispatch(request());
    return userService.getUserPhotos(id)
    .then(response => {
      dispatch(success(response.data));
    })
    .catch(function (error) {
      dispatch(failure(error.response));
    })
  };

  function request() { return { type:userPhotosConstants.GET_PHOTOS_REQUEST } }
  function success(photos) { return { type:userPhotosConstants.GET_PHOTOS_SUCCESS,photos } }
  function failure(error) { return { type:userPhotosConstants.GET_PHOTOS_FAILURE, error } }
}

/* ---------------------------------------------------Delete User Photos-------------*/

function deleteUserPhoto(id) {
  return dispatch => {
    dispatch(request());
    return userService.deleteUserPhoto(id)
        .then(response => {
          dispatch(success(response.data,id));
        })
        .catch(function (error) {
          dispatch(failure(error.response));
        })
  };

  function request() { return { type:deleteUserPhotoConstants.DELETE_PHOTO_REQUEST } }
  function success(photo,id) { return { type:deleteUserPhotoConstants.DELETE_PHOTO_SUCCESS,photo,id } }
  function failure(error) { return { type:deleteUserPhotoConstants.DELETE_PHOTO_FAILURE, error } }
}