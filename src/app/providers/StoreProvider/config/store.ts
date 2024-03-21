import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { cartReducer } from '@/entities/Cart'
import { authReducer, userReducer } from '@/entities/User'
import { productListReducer, productReducer } from '@/entities/Product'

const rootReducer = combineReducers({
    userReducer,
    authReducer,
    cartReducer,
    productReducer,
    productListReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
