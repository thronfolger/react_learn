import { combineReducers } from 'redux';

import mainReducer from './mainReducer'
import secondReducer from './secondReducer'
import dumbReducer from './dumbReducer'
import numberReducer from './numberReducer'

const appReducer = combineReducers({ main: mainReducer, secondReducer, stupid: dumbReducer, numberReducer });

const rootReducer = (state, action) => {

    if (action.type === 'CLEAR_STATE') {
        state = void(0);
    }

    return appReducer(state, action);

}

export default rootReducer;
