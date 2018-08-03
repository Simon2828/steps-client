import { EDIT_LO } from '../types/editLo';

export const editLo = (data, id) => {
	return dispatch => {
		dispatch({
			type: EDIT_LO,
			id,
			payload: data
		})

	}

}