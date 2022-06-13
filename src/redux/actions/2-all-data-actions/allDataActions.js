import {allDataConstants} from "../../constants/2-all-data-Constant/allDataActionTypes";
import {userService} from "../../services";

export const allDataActions = {
       getAllData,
};

function getAllData (url) {
    return dispatch => {
      dispatch(request());
      return userService.combineApiCalls(url).then(response => {
        dispatch(success(response));
      }).catch(function (error) {
        dispatch(failure(error.response));
      })
    };

    function request() { return { type: allDataConstants.GET_ALL_DATA_REQUEST } }
    function success(data) {return { type: allDataConstants.GET_ALL_DATA_SUCCESS, data } }
    function failure(error) { return { type: allDataConstants.GET_ALL_DATA_FAILURE, error } }

}


