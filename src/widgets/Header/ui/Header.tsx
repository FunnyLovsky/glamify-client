import { RoutesName } from '@/app/providers/router'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to={RoutesName.MAIN}>
                    <div>Glamify</div>
                </NavLink>

                <NavLink to={RoutesName.SHOP}>Товары</NavLink>
                <NavLink to={RoutesName.SHOP}>Скидки</NavLink>
                <NavLink to={RoutesName.SHOP}>Новинки</NavLink>
                <NavLink to={RoutesName.SHOP}>Стили</NavLink>
            </nav>
            <input type="text" placeholder="Поиск товаров..." />
            <nav>
                <NavLink to={RoutesName.CART}>
                    <img src="/" alt="Корзина" />
                </NavLink>
                <NavLink to={RoutesName.PROFILE}>
                    <img src="/" alt="Аккуант" />
                </NavLink>
            </nav>
        </header>
    )
}

export default Header
