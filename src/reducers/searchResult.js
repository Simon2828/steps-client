import { SET_SEARCHRESULT } from '../types/searchResult';
import { CLEAR_SEARCHRESULT } from '../types/clearSearchResult';

const initState = [];

export default (state = initState, action) => {
	switch(action.type) {
		case SET_SEARCHRESULT :
			return {...state, result: action.payload};
		case CLEAR_SEARCHRESULT :
			return {};
		default :
			return state
	}

}