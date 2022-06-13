import {allDataConstants} from "../../constants/2-all-data-Constant/allDataActionTypes";

const initialState = {
    loading: false,
    allData: {
        posts:[],
        comments:[],
        albums:[],
        photos:[]
    }
};



export function allDataReducer(state = initialState, payload) {
    switch (payload.type) {
        case allDataConstants.GET_ALL_DATA_REQUEST:
            return {
                ...state,
                allData: {
                    posts:[],
                    comments:[],
                    albums:[],
                    photos:[]
                }
            };
        case allDataConstants.GET_ALL_DATA_SUCCESS:
            return {
                ...state,
                allData: {
                    posts:payload.data,
                },
            };
        case allDataConstants.GET_ALL_DATA_FAILURE:
            return {
                ...state
            };
        default:
            return state;
    }
}



