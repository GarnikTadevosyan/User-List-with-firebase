import {userPostsConstants} from "../../constants/post-Constant/postActionTypes";

const initialState = {
    loading: false,
    authUser: null,
    posts: [],
    post:null
};

export function postReducer(state = initialState, payload) {

    switch (payload.type) {
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
        case userPostsConstants.ADD_POST_REQUEST:
            return {
                ...state
            };
        case userPostsConstants.ADD_POST_SUCCESS:
            return {
                ...state,
                post: payload.post,
            };
        case userPostsConstants.ADD_POST_FAILURE:
            return {
                ...state,
                post:null,
                error: payload.error,
            };
        default:
            return state;
    }
}


