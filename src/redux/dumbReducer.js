const initState = {
    actionCounter: 0,
}

const dumbReducer = (state = initState) => {

    let actionCounter = state.actionCounter + 1;
    return { actionCounter };

};

export default dumbReducer;
