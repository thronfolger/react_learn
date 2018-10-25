import { combineReducers } from 'redux';

import mainReducer from './mainReducer';
import secondReducer from './secondReducer';
import dumbReducer from './dumbReducer';
import todoReducer from '../reducers/TodoReducer';

const appReducer = combineReducers({ main: mainReducer, todo: todoReducer, secondReducer, stupid: dumbReducer });

const rootReducer = (state, action) => {

    if (action.type === 'CLEAR_STATE') {
        state = void(0);
    }

    return appReducer(state, action);

}

export default rootReducer;
