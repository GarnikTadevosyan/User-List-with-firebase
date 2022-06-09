import {userAlbumsConstants} from "../../constants/album-Constant/albumActionTypes";

const initialState = {
    loading: false,
    albums: [],
};

export function albumReducer(state = initialState, payload) {

    switch (payload.type) {
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
        default:
            return state;
    }
}


