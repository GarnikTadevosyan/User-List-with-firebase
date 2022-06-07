import {userPhotosConstants, deleteUserPhotoConstants} from '../../constants/photo-Constant/photoActionTypes';
import {userService} from '../../services';
export const photoActions = {
        getUserPhotos,
        deleteUserPhoto,
};

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