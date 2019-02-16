import randomInteger from '../utils/randomInteger';

const initState = {
    appName: 'TodoApp',
    number: 0
};

const mainReducer = (state = initState, action) => {

    switch (action.type) {

        case 'RESET_NUMBER':
            return { ...state, number: 0 };

        case 'GENERATE_NUMBER':
            return GENERATE_NUMBER(state, action);

        default:
            return state;

    }

};

function GENERATE_NUMBER(state, action) {

    let { min, max } = action.payload;

    const newNumber = randomInteger(min, max);

    const newState = { ...state, number: newNumber };
    return newState;

};

export default mainReducer;
