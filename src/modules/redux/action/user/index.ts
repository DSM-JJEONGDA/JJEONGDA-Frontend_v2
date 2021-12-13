import { SET_USERINFO } from "./interface";

export const setUserInfo = (info: {
    id: number,
    email: string
    name: string
}) => ({
    type: SET_USERINFO,
    payload: info
})

export type UserActionType = ReturnType<typeof setUserInfo>