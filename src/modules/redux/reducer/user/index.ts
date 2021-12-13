import { UserActionType } from "../../action/user";
import { SET_USERINFO } from "../../action/user/interface";
import UserState from "./interface";

const initState: UserState = {
    info: {
        id: 0,
        email: '',
        name: '',
    }
}

const setUserReducer = (state: UserState = initState, action: UserActionType): UserState => {
    switch (action.type) {
        case SET_USERINFO:
            return {
                info: action.payload
            }
        default:
            return state
    }
}
export default setUserReducer