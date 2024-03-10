import { IUser } from '../types/IUser'

interface UserState {
    auth: boolean
    user: IUser
}

export enum UsersTypes {
    AUTH_USER = 'AUTH_USER',
}

export const initialState: UserState = {
    auth: false,
    user: {
        email: '',
        id: '',
        name: '',
    },
}

export interface AuthUserAction {
    type: UsersTypes.AUTH_USER
    payload: IUser
}

export type UserAction = AuthUserAction

export const userReducer = (state: UserState, action: UserAction): UserState => {
    switch (action.type) {
        case UsersTypes.AUTH_USER:
            return {
                ...state,
                user: action.payload,
                auth: true,
            }
        default:
            return state
    }
}
