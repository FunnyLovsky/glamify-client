import Container from '@/shared/ui/Container'
import styles from './Account.module.scss'
import { Logout } from '@/features/Logout'
import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'

const Account = () => {
    const { user, isLoading } = useAppSelector((state) => state.userReducer)
    return (
        <Container>
            <h1 className={styles.s}>Profile Page</h1>
            <h3>Ваше имя: {user.name}</h3>
            <h3>Email: {user.email}</h3>
            {isLoading ? <p>Loading...</p> : <Logout />}
        </Container>
    )
}

export default Account
