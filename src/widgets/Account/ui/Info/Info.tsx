import styles from './Info.module.scss'
import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'

const Info = () => {
    const { user } = useAppSelector((state) => state.userReducer)

    return (
        <main className={styles.main}>
            <h3>Ваше имя: {user.name}</h3>
            <h3>Email: {user.email}</h3>
        </main>
    )
}

export default Info
