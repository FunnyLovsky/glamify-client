import { RoutesName } from '@/app/providers/router'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'
import Container from '@/shared/ui/Container'
import TWITTER from '@/shared/assets/icons/twitter.svg'
import FACEBOOK from '@/shared/assets/icons/facebook.svg'
import GITHUB from '@/shared/assets/icons/github.svg'
import VISA from '@/shared/assets/icons/visa.svg'
import MASTERCARD from '@/shared/assets/icons/mastercard.svg'
import PAYPAL from '@/shared/assets/icons/paypal.svg'
import APPLE_PAY from '@/shared/assets/icons/a_pay.svg'
import GOOGLE_PAY from '@/shared/assets/icons/g_pay.svg'

const Header = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.cont}>
                    <div className={styles.main}>
                        <h1>GLAMIFY</h1>
                        <p>
                            У нас есть одежда, которая подходит вашему стилю и которой вы гордитесь.
                            От женской до мужской.
                        </p>
                        <div className={styles.social}>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                <TWITTER />
                            </a>
                            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                                <FACEBOOK />
                            </a>
                            <a href="https://github.com/" target="_blank" rel="noreferrer">
                                <GITHUB />
                            </a>
                        </div>
                    </div>
                    <div className={styles.inner}>
                        <h2>Компания</h2>
                        <Link to={RoutesName.MAIN}>О нас</Link>
                        <Link to={RoutesName.MAIN}>Особенности</Link>
                        <Link to={RoutesName.MAIN}>Каталог</Link>
                        <Link to={RoutesName.MAIN}>Карьера</Link>
                    </div>
                    <div className={styles.inner}>
                        <h2>Помощь</h2>
                        <Link to={RoutesName.MAIN}>Поддержка клиентов</Link>
                        <Link to={RoutesName.MAIN}>Детали доставки</Link>
                        <Link to={RoutesName.MAIN}>Условия использования</Link>
                        <Link to={RoutesName.MAIN}>Политика конфиденциальности</Link>
                    </div>
                    <div className={styles.inner}>
                        <h2>Вопросы</h2>
                        <Link to={RoutesName.MAIN}>Учетная запись</Link>
                        <Link to={RoutesName.MAIN}>Управление доставками</Link>
                        <Link to={RoutesName.MAIN}>Заказы</Link>
                        <Link to={RoutesName.MAIN}>Платежи</Link>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.reserved}>Glamify © 2000-2024, Все права защищены</div>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <VISA />
                        </div>
                        <div className={styles.card}>
                            <MASTERCARD />
                        </div>
                        <div className={styles.card}>
                            <PAYPAL />
                        </div>
                        <div className={styles.card}>
                            <APPLE_PAY />
                        </div>
                        <div className={styles.card}>
                            <GOOGLE_PAY />
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Header
