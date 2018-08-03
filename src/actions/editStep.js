import { EDIT_STEP } from '../types/editStep';

export const editStep = (data, id) => {
	return dispatch => {
		dispatch({
			type: EDIT_STEP,
			id,
			payload: data
		})

	}

}