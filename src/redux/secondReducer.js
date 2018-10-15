const initialState = {
  nothing: 'here'
}

function secondReducer(state = initialState, action = {}) {

    switch (action.type) {
        case 'ACTION_NAME':
          return ACTION_NAME(state, action);
        default:
          return state;
    }

}


function ACTION_NAME(state, action) {

    return state;

}

export default secondReducer;
