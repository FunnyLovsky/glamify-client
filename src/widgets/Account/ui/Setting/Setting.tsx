import AppButton from '@/shared/ui/AppButton'
import styles from './Setting.module.scss'
import { Logout } from '@/features/Logout'

const Setting = () => {
    return (
        <main className={styles.main}>
            <div className={styles.inner}>
                <h3>Выйти из аккаунта</h3>
                <Logout />
            </div>
            <div className={styles.inner}>
                <h3>Удалить аккаунт</h3>
                <AppButton variant="delete">Удалить</AppButton>
            </div>
        </main>
    )
}

export default Setting
