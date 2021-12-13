import { SET_LOGIN } from "./interface";

export const setLogin = (status: boolean) => ({
    type: SET_LOGIN,
    payload: status
})

export type authActionType = ReturnType<typeof setLogin>