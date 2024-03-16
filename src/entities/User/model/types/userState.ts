import { IUser } from '../../types/IUser'

export interface UserState {
    user: IUser
    isLoading: boolean
    error: string | null
}
