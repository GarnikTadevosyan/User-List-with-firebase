import { combineReducers } from 'redux';
import {userReducer} from "./1-user-reducer/userReducer";
import {albumReducer} from "./album-reducer/albumReducer";
import {commentReducer} from "./comment-reducer/commentReducer";
import {photoReducer} from "./photo-reducer/photoReducer";
import {postReducer} from "./post-reducer/postReducer";

const rootReducer = combineReducers({
    userReducer,
    postReducer,
    commentReducer,
    albumReducer,
    photoReducer
});

export default rootReducer;