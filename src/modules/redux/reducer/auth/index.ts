import { authActionType } from "../../action/auth";
import { SET_LOGIN } from "../../action/auth/interface";
import AuthState from "./interface";

const initState: AuthState = {
    loginStatus: localStorage.getItem('login') === 'true' ? true : false
}

const setLoginReducer = (state: AuthState = initState, action: authActionType): AuthState => {
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                loginStatus: action.payload
            }
        default:
            return state
    }
}
export default setLoginReducer