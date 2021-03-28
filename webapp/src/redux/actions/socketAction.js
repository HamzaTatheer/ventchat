
export const createConnection = (socket) => {
    return {type:"ADD",payload:socket};
};


export const removeConnection = () => {
	return{
		type: "REMOVE"
	};
};
