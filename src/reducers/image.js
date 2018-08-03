import { IMAGE } from '../types/image';


const initState = '';

export default (state = initState, action) => {
	switch(action.type) {
		case IMAGE :
			return action.payload;
		default :
			return state
	}

}