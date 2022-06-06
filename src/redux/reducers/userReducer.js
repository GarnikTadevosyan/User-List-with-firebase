import {
  userConstants,
  userPostsConstants,
  userAlbumsConstants,
  userCommentsConstants,
  deleteCommentConstants,
  userPhotosConstants,
  editCommentsConstans,
  addCommentsConstants,
  deleteUserPhotoConstants
} from '../constants/actionTypes';
import {useState} from "react";

const initialState = {
  loading: false,
  users: [],
  posts: [],
  albums: [],
  commentId: 500,
  comments: [],
  photos: [],
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
        users: payload.users, 
      };
    case userConstants.GET_USERS_FAILURE:
      return {
        ...state
      };
    case userPostsConstants.GET_POSTS_REQUEST:
      return {
        ...state
      };
    case userPostsConstants.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload.posts,
      };
    case userPostsConstants.GET_POSTS_FAILURE:
      return {
        ...state,
        posts: [],
        error: payload.error,
      };
    case userAlbumsConstants.GET_ALBUMS_REQUEST:
      return {
        ...state,
        posts: [],
        error: '',
        loading: true,
      };
    case userAlbumsConstants.GET_ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        albums: payload.albums,
      };
    case userAlbumsConstants.GET_ALBUMS_FAILURE:
      return {
        ...state,
        loading: false,
        albums: [],
        error: payload.error,
      };
      case userCommentsConstants.GET_COMMENTS_REQUEST:
      return {
        ...state
      };
    case userCommentsConstants.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: payload.posts,
      };
    case userCommentsConstants.GET_COMMENTS_FAILURE:
      return {
        ...state
      };
      case userPhotosConstants.GET_PHOTOS_REQUEST:
      return {
        ...state
      };
    case userPhotosConstants.GET_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: payload.photos,
      };
    case userPhotosConstants.GET_PHOTOS_FAILURE:
      return {
        ...state
      };
    case deleteUserPhotoConstants.DELETE_PHOTO_REQUEST:
      return {
        ...state
      };
    case deleteUserPhotoConstants.DELETE_PHOTO_SUCCESS:
         let filtrPhotos = state.photos.filter( item => item.id !== payload.id);
      return {
        ...state,
        photos:filtrPhotos,
      };
    case deleteUserPhotoConstants.DELETE_PHOTO_FAILURE:
      return {
        ...state
      };
    case deleteCommentConstants.DELETE_COMMENT_REQUEST:
      return {
        ...state
      };
    case deleteCommentConstants.DELETE_COMMENT_SUCCESS:
      const comments = state.comments.filter(item => item.id !== payload.id);
      return {
        ...state,
        comments: comments,
      };
    case deleteCommentConstants.DELETE_COMMENT_FAILURE:
      return {
        ...state
      };
    case editCommentsConstans.EDIT_COMMENT_REQUEST:
      return {
        ...state
      };
    case editCommentsConstans.EDIT_COMMENT_SUCCESS:
      let editedComment = payload.comment;
      let initialComments = state.comments;
      let editedComments = initialComments.map( item => {
          if (item.id == editedComment.id) {
              item.body = editedComment.body
          }
          return item
      } );
      return {
        ...state,
        comments:editedComments,
      };
    case editCommentsConstans.EDIT_COMMENT_FAILURE:
      return {
        ...state
      };
    case addCommentsConstants.ADD_COMMENT_REQUEST:
      return {
        ...state
      };
    case addCommentsConstants.ADD_COMMENT_SUCCESS:
      let toAddComment = payload.comment;
      toAddComment.id = state.commentId + 1;
      let prevComments = state.comments;
      let newComments = [...prevComments, toAddComment];
      return {
        ...state,
        comments: newComments,
        commentId:toAddComment.id,
      };
    case addCommentsConstants.ADD_COMMENT_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
}


