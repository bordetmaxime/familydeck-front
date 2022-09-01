export const GET_LISTS = 'GET_LISTS';
export const SET_LISTS = 'SET_LISTS';
export const GET_ITEMS = 'GET_ITEMS';
export const SET_ITEMS = 'SET_ITEMS';
export const RESET_ITEMS = 'RESET_ITEMS';
export const INPUT_ON_CHANGE = 'INPUT_ON_CHANGE';
export const INPUT_NEW_LIST = 'INPUT_NEW_LIST';
export const SET_NEW_LIST = 'SET_NEW_LIST';
export const INPUT_ADD_ITEM = 'INPUT_ADD_ITEM';
export const INPUT_NEW_ITEM = 'INPUT_NEW_ITEM';
export const SET_NEW_ITEM = 'SET_NEW_ITEM';


export const setLists = (data) => ({
	type: SET_LISTS,
	data,
});

export const getLists = () => ({
	type: GET_LISTS,
});

export const getItems = (listId) => ({
	type: GET_ITEMS,
	listId,
});

export const setItems = (data) => ({
	type: SET_ITEMS,
	data,
});

export const resetItems = () => ({
	type: RESET_ITEMS,
});

export const inputOnChange = (value) => ({
	type: INPUT_ON_CHANGE,
	value,
});

export const postNewList = () => ({
	type: INPUT_NEW_LIST,
});

export const setNewList = (msg) => ({
	type: SET_NEW_LIST,
	msg,
});

export const inputAddItem = (value) => ({
	type: INPUT_ADD_ITEM,
	value,
});

export const postNewItem = (listId) => ({
	type: INPUT_NEW_ITEM,
	listId,
});

export const setNewItem = (msg) => ({
	type: SET_NEW_ITEM,
	msg,
});
