// import styles from './Logout.module.scss'
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import { logoutUser } from '@/entities/User'
import AppButton from '@/shared/ui/AppButton'
import LoaderBtn from '@/shared/ui/LoaderBtn'

const Logout = () => {
    const dispatch = useAppDispatch()
    const { isLoading } = useAppSelector((state) => state.userReducer)

    const onLogout = () => {
        dispatch(logoutUser())
    }

    return (
        <>
            {isLoading ? (
                <LoaderBtn variant="button" />
            ) : (
                <AppButton onClick={onLogout} variant="black">
                    Выйти
                </AppButton>
            )}
        </>
    )
}

export default Logout
