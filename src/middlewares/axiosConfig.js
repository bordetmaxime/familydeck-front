import axios from 'axios';

const instance = axios.create({

	baseURL: 'https://family-deck-back.herokuapp.com/',
});

export default instance;
