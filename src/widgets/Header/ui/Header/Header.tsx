import { RoutesName } from '@/app/providers/router'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
import Conatiner from '@/shared/ui/Container'
import AppLink from '@/shared/ui/AppLink'
import AppInput from '@/shared/ui/AppInput'
import { ProfileIcon } from '@/entities/User'
import { CartIcon } from '@/entities/Cart'
import { useState } from 'react'
import { SearchModal } from '@/widgets/SearchModal'
import AppIconButton from '@/shared/ui/AppIconButton'
import BurgerModal from '../BurgerModal/BurgerModal'

const Header = () => {
    const [search, setSearch] = useState(false)
    const [burger, setBurger] = useState(false)

    return (
        <header className={styles.header} style={{ paddingRight: search ? '18px' : '' }}>
            <Conatiner>
                <nav className={styles.nav}>
                    <div className={styles.burger}>
                        <AppIconButton
                            icon="burger"
                            onClick={() => {
                                setBurger(true)
                            }}
                        />
                        <NavLink to={RoutesName.MAIN} className={styles.avatar}>
                            <h1>Glamify</h1>
                        </NavLink>
                    </div>

                    <div className={styles.cont} id={styles.category}>
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
                    <div className={styles.search}>
                        <AppInput
                            placeholder="Поиск товаров..."
                            type="text"
                            icon="search"
                            onFocus={() => setSearch(true)}
                        />
                    </div>

                    <div className={styles.cont}>
                        <AppIconButton icon="search" onClick={() => setSearch(true)} />
                        <CartIcon />
                        <ProfileIcon />
                    </div>
                </nav>
            </Conatiner>
            {search && <SearchModal onClose={() => setSearch(false)} />}
            {burger && <BurgerModal onClose={() => setBurger(false)} />}
        </header>
    )
}

export default Header
