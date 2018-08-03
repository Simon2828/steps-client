import {SET_SEARCHRESULT} from '../types/searchResult';

export const setSearchResult = (result) => {
    return dispatch => {
        dispatch({
            type: SET_SEARCHRESULT,
            payload: result
        }) 
    }
}