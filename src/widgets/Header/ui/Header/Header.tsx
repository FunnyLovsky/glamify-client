import { RoutesName } from '@/app/providers/router'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
import Conatiner from '@/shared/ui/Container'
import AppLink from '@/shared/ui/AppLink'
import AppInput from '@/shared/ui/AppInput'
import { ProfileIcon } from '@/entities/User'
import { CartIcon } from '@/entities/Cart'
import { useEffect, useRef, useState } from 'react'
import { SearchModal } from '@/widgets/SearchModal'
import AppIconButton from '@/shared/ui/AppIconButton'
import BurgerModal from '../BurgerModal/BurgerModal'
import Modal from '@/shared/ui/Modal'
import { ModalOptions } from '@/shared/types/ModalOptions'

const Header = () => {
    const [paddingHeader, setPaddingHeader] = useState<'18px' | ''>('')
    const searchRef = useRef<ModalOptions>(null)
    const burgerRef = useRef<ModalOptions>(null)

    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    const bodyStyle = document.body.getAttribute('style')
                    const bodySize = document.body.offsetWidth
                    if (bodyStyle && bodyStyle.includes('overflow: hidden') && bodySize > 650) {
                        setPaddingHeader('18px')
                    } else {
                        setPaddingHeader('')
                    }
                }
            })
        })

        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['style'],
        })

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <header className={styles.header} style={{ paddingRight: paddingHeader }}>
            <Conatiner>
                <nav className={styles.nav}>
                    <div className={styles.burger}>
                        <AppIconButton
                            icon="burger"
                            onClick={() => {
                                burgerRef.current.open()
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
                            onFocus={() => searchRef.current.open()}
                        />
                    </div>

                    <div className={styles.cont}>
                        <AppIconButton icon="search" onClick={() => searchRef.current.open()} />
                        <CartIcon />
                        <ProfileIcon />
                    </div>
                </nav>
            </Conatiner>
            <Modal ref={searchRef}>
                <SearchModal onClose={() => searchRef.current.close()} />
            </Modal>
            <Modal ref={burgerRef} withAnimation={true}>
                <BurgerModal onClose={() => burgerRef.current.close()} />
            </Modal>
        </header>
    )
}

export default Header
