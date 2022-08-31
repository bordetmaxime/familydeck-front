export const GET_LISTS = 'GET_LISTS';
export const SET_LISTS = 'SET_LISTS';


export const setLists = (data) => ({
	type: SET_LISTS,
  data,
});

export const getLists = () => ({
	type: GET_LISTS,
});
