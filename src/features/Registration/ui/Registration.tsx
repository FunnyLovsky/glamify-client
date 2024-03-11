import AppInput from '@/shared/ui/AppInput'
import styles from './Registration.module.scss'

const Registration = () => {
    return (
        <div className={styles.cont}>
            <h3>Создать новый аккаунт</h3>
            <form>
                <AppInput type="text" placeholder="Придумайте имя..." icon="user" />
                <AppInput type="email" placeholder="Введите email..." icon="email" />
                <AppInput type="password" placeholder="Введите пароль" icon="password" />
                <button>Зарегистрироваться</button>
            </form>
        </div>
    )
}

export default Registration
