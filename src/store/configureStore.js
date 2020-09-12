// ========================== IMPORT ===========================

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";

//==================== CODE ====================================

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //for redux dev tools

export default () => {
	//store creation
	const store = createStore(
		combineReducers({
			auth: authReducer,
		}),
		composeEnhancers(applyMiddleware(thunk))
	);

	return store;
};

//Redux Thunk middleware allows you to write action creators that return a function instead of an action.
//The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
//The inner function receives the store methods dispatch and getState as parameters.
