import { SET_MESSAGE } from '../types/message';
import { CLEAR_MESSAGE } from '../types/clearMessage';

const initState = {
	message: ''
}

export default (state = initState, action) => {
	switch(action.type) {
		case SET_MESSAGE :
			return {...state, message: action.payload.message};
		case CLEAR_MESSAGE :
			return {...state, message: action.payload.message};
		default :
			return state
	}

}