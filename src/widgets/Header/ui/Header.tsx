import { RoutesName } from '@/app/providers/router'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
import Conatiner from '@/shared/ui/Container'

const Header = () => {
    return (
        <header className={styles.header}>
            <Conatiner>
                <nav className={styles.nav}>
                    <div>
                        <NavLink to={RoutesName.MAIN}>
                            <div>Glamify</div>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to={RoutesName.SHOP}>Товары</NavLink>
                        <NavLink to={RoutesName.SALES}>Скидки</NavLink>
                        <NavLink to={RoutesName.ARRIVALS}>Новинки</NavLink>
                        <NavLink to={RoutesName.STYLES}>Стили</NavLink>
                    </div>

                    <input type="text" placeholder="Поиск товаров..." />
                    <div>
                        <NavLink to={RoutesName.CART}>
                            <img src="/" alt="Корзина" />
                        </NavLink>
                        <NavLink to={RoutesName.PROFILE}>
                            <img src="/" alt="Аккуант" />
                        </NavLink>
                    </div>
                </nav>
            </Conatiner>
        </header>
    )
}

export default Header
