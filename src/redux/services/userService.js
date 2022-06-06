import axios from "axios";

export const userService = {
      getUserList,
      getUserPosts,
      getUserComments,
      getUserAlbums,
      getUserPhotos,
      deleteUserPhoto,
      deleteUserComment,
      editUserComment,
      addUserComment,
};

function getUserList () {
         return axios.get('https://jsonplaceholder.typicode.com/users')
         .then(res => res)
}
function getUserPosts (userId) { 
         return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(res => res)
}
function getUserComments (postId) { 
         return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
         .then(res => res)
}
function getUserAlbums (albumId) {
         return axios.get(`https://jsonplaceholder.typicode.com/users/${albumId}/albums`)
         .then(res => res)
}
function getUserPhotos (albumId) {
      return axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then(res => res)
}
function deleteUserPhoto (photoId) {
    return axios.delete(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
        .then(res => res)
}
function deleteUserComment(toDeleteCommentId) {
     return axios.delete(`https://jsonplaceholder.typicode.com/comments/${toDeleteCommentId}`)
     .then(res => res);
}

function editUserComment(toEditComment) {
    return axios.put(`https://jsonplaceholder.typicode.com/comments/${toEditComment.id}`, toEditComment)
        .then(res => res);
}
function addUserComment(toAddComment) {
    return axios.post(`https://jsonplaceholder.typicode.com/posts/${toAddComment.postId}/comments`,toAddComment)
        .then( res =>  res );
}
