import {CLEAR_SEARCHRESULT} from '../types/clearSearchResult';

export const clearSearchResult = (result) => {
    return dispatch => {
        dispatch({
            type: CLEAR_SEARCHRESULT,
            payload: result
        }) 
    }
}

// put into Teacher and App component and searchResult reducer
// do imports...