import {userPhotosConstants,deleteUserPhotoConstants} from "../../constants/photo-Constant/photoActionTypes";

const initialState = {
    loading: false,
    authUser: null,
    photos: [],
};

export function photoReducer(state = initialState, payload) {

    switch (payload.type) {
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
        default:
            return state;
    }
}


