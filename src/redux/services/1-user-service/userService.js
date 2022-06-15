import axios from "axios";
import {collection,getDocs,addDoc,doc,setDoc,query,where} from 'firebase/firestore';
import {db} from "../firebaseService/firebaseConfig";
/* ID generator*/
import { nanoid } from 'nanoid'
/////////////////////////////////////
const userCollectionHref = collection(db,'users');
const postCollectionHref = collection(db,'posts');

export const userService = {
      getUserList,
      addUserInUserList,
      getUserPosts,
      addUserPost,
      getUserComments,
      getUserAlbums,
      getUserPhotos,
      deleteUserPhoto,
      deleteUserComment,
      editUserComment,
      addUserComment,
      combineApiCalls
};
/*-----------------------------------JSON PLACEHOLDER COMBINE CALLS-------------------------------------------*/

function combineApiCalls () {
         console.log('void function');
}

/*----------------------------------------------------USER CALLS-------------------------------------------*/

function getUserList ()  {
         return getDocs(userCollectionHref)
        .then( (users) => {
            return  {data:users.docs.map( (doc) => ({...doc.data()}) ) }
        });
}

function addUserInUserList(user) {
         return setDoc(doc(userCollectionHref, user.id), user)
                 .then( (user) => {
                     return  {data:user}
                 }).catch( err => console.log('service',err));
}
/*----------------------------------------------------POST CALLS-------------------------------------------*/

async function getUserPosts (userId) {
               const data = [];
               const q = query(collection(db, "posts"), where("userId", "==", userId));
               const querySnapshot = await getDocs(q);
               querySnapshot.forEach((doc) => {
               data.push(doc.data()) });
               return data
}
async function addUserPost (post) {
               let randomPath = nanoid(20);
               post.id = randomPath;
               setDoc(doc(postCollectionHref, randomPath), post);
}

/*----------------------------------------------------COMMENT CALLS-------------------------------------------*/

async function getUserComments (postId) {
               const data = [];
               const q = query(collection(db, "comments"), where("postId", "==", postId));
               const querySnapshot = await getDocs(q);
               querySnapshot.forEach((doc) => {
                              data.push(doc.data()) });
               return data
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

/*----------------------------------------------------ALBUM CALLS-------------------------------------------*/

async function getUserAlbums (albumId) {
               const data = [];
               const q = query(collection(db, "albums"), where("userId", "==", albumId));
               const querySnapshot = await getDocs(q);
               querySnapshot.forEach((doc) => {
               data.push(doc.data()) });
               return data
}

/*----------------------------------------------------PHOTO CALLS-------------------------------------------*/

async function getUserPhotos (albumId) {
                const data = [];
                const q = query(collection(db, "photos"), where("albumId", "==", albumId));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                data.push(doc.data()) });
                return data
}
function deleteUserPhoto (photoId) {
    return axios.delete(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
        .then(res => res)
}

