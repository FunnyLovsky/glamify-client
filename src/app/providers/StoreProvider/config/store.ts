import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from '@/entities/User/model/slice/userSilce'
import authReducer from '@/entities/User/model/slice/authSlice'

const rootReducer = combineReducers({
    userReducer,
    authReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
