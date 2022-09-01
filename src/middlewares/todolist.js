import axios from 'axios';
import { getItems, getLists, GET_ITEMS, GET_LISTS, INPUT_NEW_ITEM, INPUT_NEW_LIST, setItems, setLists, setNewItem, setNewList } from '../actions/todolist';


const todolistMiddleware = (store) => (next) => async (action) => { 

	switch (action.type) { 

		case GET_LISTS: {
			const { token } = store.getState().user;
			const { familyId } = store.getState().user.family;

			try {
				const { data } = await axios.get(`https://family-deck-back.herokuapp.com/api/todolist/family/${ familyId }`, {
					headers: {
						Authorization: `Bearer ${ token }`,
					},
				});
				store.dispatch(setLists(data));
				console.log('data TODOLIST middleware ===>',data);
				break;
        
			} catch (error) {
				console.error(error);
				console.log(error.response.data.msg);
				// store.dispatch(setErrLogin(error.response.data.msg));
				break;
			}
		}

		case GET_ITEMS: {
			const { token } = store.getState().user;
			const listId = action.listId;

			try {
				const { data } = await axios.get(`https://family-deck-back.herokuapp.com/api/todolist/${ listId }/items`, {
					headers: {
						Authorization: `Bearer ${ token }`,
					},
				});
				store.dispatch(setItems(data.todolistAndItems));
				// console.log('data ITEMS middleware ===>',data.todolistAndItems);
				break;
        
			} catch (error) {
				console.error(error);
				console.log(error.response.data.msg);
				// store.dispatch(setErrLogin(error.response.data.msg));
				break;
			}
		}

		case INPUT_NEW_LIST: {
			const { token } = store.getState().user;
			const title = store.getState().todolist.inputAddList;
			const memberId = store.getState().user.member.memberid;
			const { familyId } = store.getState().user.family;

			try {
				const { data } = await axios.post('https://family-deck-back.herokuapp.com/api/todolist/',{
					familyId,
					memberId,
					title,
					color: '', 
				}, {
					headers: {
						Authorization: `Bearer ${ token }`,
					},
				});
				store.dispatch(setNewList(data.msg));
        store.dispatch(getLists());
				console.log('data CREATE NEW LIST ===>',data);
				break;
        
			} catch (error) {
				console.error(error);
				console.log(error.response.data.msg);
				// store.dispatch(setErrLogin(error.response.data.msg));
				break;
			}
		}

    case INPUT_NEW_ITEM: {
			const { token } = store.getState().user;
			const title = store.getState().todolist.inputAddItem;
      const listId = action.listId;

			try {
				const { data } = await axios.post(`https://family-deck-back.herokuapp.com/api/todolist/${listId}/items`,{
					title,
					color: '',
          deadline: '',
				}, {
					headers: {
						Authorization: `Bearer ${ token }`,
					},
				});
				store.dispatch(setNewItem(data.msg));
        store.dispatch(getItems(listId));
				console.log('data CREATE NEW ITEM ===>',data);
				break;
        
			} catch (error) {
				console.error(error);
				console.log(error.response.data.msg);
				// store.dispatch(setErrLogin(error.response.data.msg));
				break;
			}
		}

		default: 
			next(action); 
	} 
}; 

export default todolistMiddleware;
