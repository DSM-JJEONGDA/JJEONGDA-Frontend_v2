import { combineReducers } from 'redux';
import setLoginReducer from './auth';
import setUserReducer from './user';

const rootReducer = combineReducers({
    setlogin: setLoginReducer,
    setuser: setUserReducer
})

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;