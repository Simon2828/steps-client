import { IMAGE } from '../types/image';

export const image = (data) => {
	return dispatch => {
		dispatch({
			type: IMAGE,
			payload: data
		})

	}

}