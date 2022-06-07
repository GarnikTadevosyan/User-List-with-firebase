import {userService} from "../../services";
import {userPostsConstants} from "../../constants/post-Constant/postActionTypes";

export const postActions = {getUserPosts};

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