import styles from './Logout.module.scss'
import { useAppDispatch } from '@/app/providers/StoreProvider/lib/hooks'
import { logoutUser } from '@/entities/User'

const Logout = () => {
    const dispatch = useAppDispatch()

    const onLogout = () => {
        dispatch(logoutUser())
    }

    return (
        <button onClick={onLogout} className={styles.v}>
            Выйти
        </button>
    )
}

export default Logout
