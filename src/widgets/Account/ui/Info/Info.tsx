import AppInput from '@/shared/ui/AppInput'
import styles from './Info.module.scss'
import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'

const Info = () => {
    const { user } = useAppSelector((state) => state.userReducer)

    return (
        <div className={styles.cont}>
            <div className={styles.item}>
                <p>Ваше имя:</p>
                <AppInput icon="user" type="text" value={user.name} disabled={true} />
            </div>
            <div className={styles.item}>
                <p>Email:</p>
                <AppInput icon="email" type="text" value={user.email} disabled={true} />
            </div>
        </div>
    )
}

export default Info
