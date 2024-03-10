import { IUser } from '../../types/IUser'

export interface UserState {
    auth: boolean
    user: IUser
    isLoading: boolean
    error: string | null
}
