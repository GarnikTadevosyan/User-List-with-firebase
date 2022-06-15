import {userService} from "../../services";
import {userPostsConstants} from "../../constants/post-Constant/postActionTypes";

export const postActions = {getUserPosts,addPost};

function getUserPosts(id) {
    return dispatch => {
        dispatch(request());
        return userService.getUserPosts(id)
            .then(response => {
                dispatch(success(response));
            })
            .catch(function (error) {
                dispatch(failure(error.response));
            })
    };

    function request() { return { type: userPostsConstants.GET_POSTS_REQUEST } }
    function success(posts) { return { type: userPostsConstants.GET_POSTS_SUCCESS, posts } }
    function failure(error) { return { type: userPostsConstants.GET_POSTS_FAILURE, error } }
}

function addPost(post) {
    return dispatch => {
        dispatch(request());
        return userService.addUserPost(post)
            .then(response => {
                dispatch(success(response));
            })
            .catch(function (error) {
                dispatch(failure(error.response));
            })
    };

    function request() { return { type: userPostsConstants.ADD_POST_REQUEST } }
    function success(post) { return { type: userPostsConstants.ADD_POST_SUCCESS, post } }
    function failure(error) { return { type: userPostsConstants.ADD_POST_FAILURE, error } }
}
