import { combineReducers } from 'redux';
import {userReducer} from "./1-user-reducer/userReducer";
import {allDataReducer} from "./2-all-data-reducer/allDatatReducer";
import {albumReducer} from "./album-reducer/albumReducer";
import {commentReducer} from "./comment-reducer/commentReducer";
import {photoReducer} from "./photo-reducer/photoReducer";
import {postReducer} from "./post-reducer/postReducer";

const rootReducer = combineReducers({
    userReducer,
    albumReducer,
    postReducer,
    commentReducer,
    photoReducer,
    allDataReducer
});

export default rootReducer;