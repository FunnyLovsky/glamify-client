import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { cartReducer } from '@/entities/Cart'
import { authReducer, userReducer } from '@/entities/User'

const rootReducer = combineReducers({
    userReducer,
    authReducer,
    cartReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
