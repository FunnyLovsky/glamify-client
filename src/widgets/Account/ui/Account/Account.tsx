import Container from '@/shared/ui/Container'
import styles from './Account.module.scss'
import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import AppButton from '@/shared/ui/AppButton'
import PROFILE from '@/shared/assets/icons/profile.svg'
import { useState } from 'react'
import Info from '../Info/Info'
import Setting from '../Setting/Setting'

const Account = () => {
    const { user } = useAppSelector((state) => state.userReducer)
    const [isInfo, setIsInfo] = useState(true)

    return (
        <Container>
            <h1 className={styles.title}>Ваш профиль</h1>
            <div className={styles.cont}>
                <div className={styles.sidebar}>
                    <div className={styles.head}>
                        <PROFILE />
                        <div className={styles.text}>
                            <p>
                                Привет <span>&#128075;</span>
                            </p>

                            <h3>{user.name}</h3>
                        </div>
                    </div>
                    <div className={styles.btns}>
                        <AppButton
                            variant={isInfo ? 'black' : 'white'}
                            type="big"
                            onClick={() => setIsInfo(true)}
                        >
                            Информация
                        </AppButton>
                        <AppButton
                            variant={isInfo ? 'white' : 'black'}
                            type="big"
                            onClick={() => setIsInfo(false)}
                        >
                            Настройки
                        </AppButton>
                    </div>
                </div>
                <main className={styles.main}>{isInfo ? <Info /> : <Setting />}</main>
            </div>
        </Container>
    )
}

export default Account
