import { CLEAR_MESSAGE } from '../types/clearMessage';

export const clearMessage = () => {
	return dispatch => {

		dispatch({
			type: CLEAR_MESSAGE,
			payload: {
				message: ""
			}
		})

	}

}