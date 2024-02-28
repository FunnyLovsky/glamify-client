import { RoutesName } from '@/app/providers/router'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
import Conatiner from '@/shared/ui/Container'
import AppLink from '@/shared/ui/AppLink'
import AppInput from '@/shared/ui/AppInput'
import AppIconLink from '@/shared/ui/AppIconLink'
import CART from '@/shared/assets/icons/cart.svg'
import PROFILE from '@/shared/assets/icons/profile.svg'

const Header = () => {
    return (
        <header className={styles.header}>
            <Conatiner>
                <nav className={styles.nav}>
                    <NavLink to={RoutesName.MAIN} className={styles.avatar}>
                        <h1>Glamify</h1>
                    </NavLink>

                    <div className={styles.cont}>
                        <AppLink href={RoutesName.SHOP}>Товары</AppLink>
                        <AppLink href={RoutesName.SALES}>Скидки</AppLink>
                        <AppLink href={RoutesName.ARRIVALS}>Новинки</AppLink>
                        <AppLink href={RoutesName.STYLES}>Стили</AppLink>
                    </div>

                    <AppInput placeholder="Поиск товаров..." type="search" />

                    <div className={styles.cont}>
                        <AppIconLink href={RoutesName.CART} Icon={CART} />
                        <AppIconLink href={RoutesName.PROFILE} Icon={PROFILE} />
                    </div>
                </nav>
            </Conatiner>
        </header>
    )
}

export default Header
