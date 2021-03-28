const socketReducer = (state = null, action) => {
	switch(action.type){
		case "ADD":
			return action.payload;
		case "REMOVE":
			return null;
		default:
			return state;
	}
};

export default socketReducer;