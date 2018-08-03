import { CHANGE_COLOR } from '../types/changeColor';


const initState = '';

export default (state = initState, action) => {
	switch(action.type) {
		case CHANGE_COLOR :
			return action.payload;
		default :
			return state
	}

}