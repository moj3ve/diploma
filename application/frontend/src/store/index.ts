import { createStore } from 'redux';

const reducer = (state, action) => {
	console.log("Hello state");
	return state;
}

export const store = createStore(reducer)