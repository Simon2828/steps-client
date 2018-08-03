import { SET_INDEX } from '../types/stepIndex';

export const setStepIndex = (index, orderOfResultsIndex) => {
	return dispatch => {

		dispatch({
			type: SET_INDEX,
			payload: {
				index,
				orderOfResultsIndex
			}
		})

	}

}