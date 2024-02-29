import { RoutesName } from '@/app/providers/router'
import styles from './AuthBtn.module.scss'
import { Link } from 'react-router-dom'

const AuthBtn = () => {
    return (
        <Link to={RoutesName.AUTH} className={styles.login}>
            Войти
        </Link>
    )
}

export default AuthBtn
