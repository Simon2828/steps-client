import { LOS_AND_STEPS } from '../types/lOsAndSteps';
import { EDIT_LO } from '../types/editLo';

const initState = [];

export default (state = initState, action) => {
	switch (action.type) {
		case LOS_AND_STEPS:
				return action.payload;

		case EDIT_LO:
			let editedLo = state.map((los, index) => {
				if (Number(index) != action.id) {
					return los;
				}
				else {
					return {...los, lO:action.payload};
					

				}
			}
			)


			return editedLo;

		default:
			return state;
	}
}

