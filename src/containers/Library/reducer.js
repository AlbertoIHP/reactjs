// Utils

import { getNewState } from '../../lib/utils/frontend';

// Ojo este no es el mismo que se uso en redux (ismobile) pero cada estado de redux necesita un initialState
const initialState = {
	books: [],
	book: []
}

export default function libraryReducer(state = initialState, action){

	switch(action.type){
		case 'LIBRARY_LIST_BOOKS_SUCCESS': {
			const { payload: { response = [] } } = action;

				// AQUI SE LE ASIGNA EL BOOK INTIAL STATE Y SE LE ASIGNA LO NUEVO
			return getNewState(state, {
				books: response
			});
		}


		case 'LIBRARY_SHOW_SINGLE_BOOK_SUCCESS' : {
			const { payload: { response = [] } } = action;

			return getNewState(state, {
				book: response
			});

		}

	 default:
	  return state;


	}

}
