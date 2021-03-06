import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const initialState = {
	user: null,
}

const reducer = (state = initialState, action) => {
	// console.log("Hello state 2");
	return state;
}

// const reducers = combineReducers({reducer});
const reducers = reducer;

const middlewares = applyMiddleware(
	thunk,
);

const middlewaresWithDevtools = composeWithDevTools(middlewares);

export const store = createStore(reducers, middlewaresWithDevtools);
