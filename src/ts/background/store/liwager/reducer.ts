import { Reducer} from 'redux';
import { LiwagerActions } from './actions';

export interface ILiwager {
	page: string;
}

const initialState: ILiwager = {
	page: 'home'
};

const liwager: Reducer<ILiwager, LiwagerActions> = (state = initialState, action) => {
	const { payload } = action;
	switch (action.type) {
		case 'CHANGE_PAGE':
			return { ...state, page: (payload || 'home') };
		default:
			return state;
	}
};

export default liwager;
