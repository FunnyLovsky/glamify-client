import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '../config/store'

type ThunkApiConfig = {
    state: RootState
    dispatch: AppDispatch
    rejectValue: string
    extra: string
}

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const createAppAsyncThunk = createAsyncThunk.withTypes<ThunkApiConfig>()
