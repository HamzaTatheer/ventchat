import { combineReducers } from "redux";

//Add Additional Reducers Here 
import authReducer from "./authReducer";
import socketReducer from "./socketReducer";

//add here also and give the name to the reducer
const allReducers = combineReducers({
	//name: reducer
	auth: authReducer,
	socket: socketReducer
});

export default allReducers;