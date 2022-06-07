import {userCommentsConstants, deleteCommentConstants, editCommentsConstants, addCommentsConstants}
from '../../constants/comment-Constant/commentActionTypes';
import {userService} from '../../services';

export const commentActions = {
       getUserComments,
       deleteUserComment,
       editUserComment,
       addUserComment,
};

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

  function request() { return { type: editCommentsConstants.EDIT_COMMENT_REQUEST} }
  function success(comment) { return { type: editCommentsConstants.EDIT_COMMENT_SUCCESS, comment } }
  function failure(error) { return { type: editCommentsConstants.EDIT_COMMENT_FAILURE, error } }
}

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

