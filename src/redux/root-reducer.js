import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import currentUserReducer from './current-user/current-user.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['currentUser']
}

const rootReducer = combineReducers({
    currentUser: currentUserReducer
})

export default persistReducer(persistConfig, rootReducer);