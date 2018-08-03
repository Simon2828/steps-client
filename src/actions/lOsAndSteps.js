import { LOS_AND_STEPS } from '../types/lOsAndSteps';

export const storelOsAndSteps = (data) => {
	return dispatch => {

		dispatch({
			type: LOS_AND_STEPS,
			payload: data
		})

	}

}