import {
    userCommentsConstants,
    deleteCommentConstants,
    editCommentsConstants,
    addCommentsConstants} from "../../constants/comment-Constant/commentActionTypes";

const initialState = {
    loading: false,
    commentId: 500,
    comments: [],
};

export function commentReducer(state = initialState, payload) {

    switch (payload.type) {
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
        case editCommentsConstants.EDIT_COMMENT_REQUEST:
            return {
                ...state
            };
        case editCommentsConstants.EDIT_COMMENT_SUCCESS:
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
        case editCommentsConstants.EDIT_COMMENT_FAILURE:
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


