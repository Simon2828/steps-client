import { CHANGE_COLOR } from '../types/changeColor';

export const changeColor = (color) => {
	return dispatch => {

		dispatch({
			type: CHANGE_COLOR,
			payload: color
		})

	}

}