const initState = {
    luck: true,
    time: (new Date())
}

const mainReducer = (state = initState, action) => {

    switch (action.type) {
        case "ACTION_EXAMPLE":
            return { ...state };
        case "UPDATE_TIME":
            return {...state, time: new Date()};
        case "ADD_PROPERTY":
            return { ...state, [action.payload.name]: action.payload.value  };
        default:
            return state;
    }

};

export default mainReducer;
