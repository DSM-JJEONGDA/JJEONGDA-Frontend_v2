import { combineReducers } from 'redux';
import setLoginReducer from './auth';

const rootReducer = combineReducers({
    setlogin: setLoginReducer
})

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;