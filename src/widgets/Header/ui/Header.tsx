import { RoutesName } from '@/app/providers/router'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
import Conatiner from '@/shared/ui/Container'
import AppLink from '@/shared/ui/AppLink'
import AppInput from '@/shared/ui/AppInput'
import AppIconLink from '@/shared/ui/AppIconLink'
import CART from '@/shared/assets/icons/cart.svg'
import PROFILE from '@/shared/assets/icons/profile.svg'
import { ProfileIcon } from '@/entities/User'

const Header = () => {
    return (
        <header className={styles.header}>
            <Conatiner>
                <nav className={styles.nav}>
                    <NavLink to={RoutesName.MAIN} className={styles.avatar}>
                        <h1>Glamify</h1>
                    </NavLink>

                    <div className={styles.cont}>
                        <AppLink href={RoutesName.SHOP} type="text">
                            Товары
                        </AppLink>
                        <AppLink href={RoutesName.SALES} type="text">
                            Скидки
                        </AppLink>
                        <AppLink href={RoutesName.ARRIVALS} type="text">
                            Новинки
                        </AppLink>
                        <AppLink href={RoutesName.STYLES} type="text">
                            Стили
                        </AppLink>
                    </div>

                    <AppInput placeholder="Поиск товаров..." type="search" />

                    <div className={styles.cont}>
                        <AppIconLink href={RoutesName.CART} Icon={CART} />
                        <ProfileIcon />
                    </div>
                </nav>
            </Conatiner>
        </header>
    )
}

export default Header
