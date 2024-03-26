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

const Header = () => {
    const [search, setSearch] = useState(false)

    const onOpenSearch = () => {
        setSearch(true)
    }

    const onCloseSearch = () => {
        setSearch(false)
    }
    return (
        <header className={styles.header} style={{ paddingRight: search ? '18px' : '' }}>
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

                    <AppInput
                        placeholder="Поиск товаров..."
                        type="text"
                        icon="search"
                        onFocus={onOpenSearch}
                    />

                    <div className={styles.cont}>
                        <CartIcon />
                        <ProfileIcon />
                    </div>
                </nav>
            </Conatiner>
            {search && <SearchModal onClose={onCloseSearch} />}
        </header>
    )
}

export default Header
