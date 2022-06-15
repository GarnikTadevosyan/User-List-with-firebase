import {allDataConstants} from "../../constants/2-all-data-Constant/allDataActionTypes";

const initialState = {
    loading: false,
    allData:null,
    error:null,
};



export function allDataReducer(state = initialState, payload) {
    switch (payload.type) {
        case allDataConstants.GET_ALL_DATA_REQUEST:
            return {
                ...state,
                allData:null,
                loading:true
            };
        case allDataConstants.GET_ALL_DATA_SUCCESS:
            return {
                ...state,
                allData:'RESULT SUCCESS',
                loading: false
            };
        case allDataConstants.GET_ALL_DATA_FAILURE:
            return {
                ...state,
                allData:null,
                loading: false,
                error: 'Success Error'
            };
        default:
            return state;
    }
}



