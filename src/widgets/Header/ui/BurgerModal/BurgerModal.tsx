/* eslint-disable jsx-a11y/no-static-element-interactions */
import styles from './BurgerModal.module.scss'
import { FC, useState } from 'react'
import { RoutesName } from '@/app/providers/router'
import AppLink from '@/shared/ui/AppLink'

interface IProps {
    onClose: () => void
}

const BurgerModal: FC<IProps> = ({ onClose }) => {
    const [isClose, setIsClose] = useState(false)

    const closeAnimation = () => {
        setIsClose(true)
    }

    const closeBurger = () => {
        setIsClose(true)
        setTimeout(() => {
            onClose()
        }, 200)
    }

    return (
        <div className={styles.menu} onClick={closeAnimation}>
            <div
                className={styles.cont}
                id={styles.category}
                onClick={(e) => e.stopPropagation()}
                style={{ animationName: isClose && styles.end }}
            >
                <AppLink href={RoutesName.SHOP} type="text" onClick={closeBurger}>
                    Товары
                </AppLink>
                <AppLink href={RoutesName.SALES} type="text" onClick={closeBurger}>
                    Скидки
                </AppLink>
                <AppLink href={RoutesName.ARRIVALS} type="text" onClick={closeBurger}>
                    Новинки
                </AppLink>
                <AppLink href={RoutesName.STYLES} type="text" onClick={closeBurger}>
                    Стили
                </AppLink>
            </div>
        </div>
    )
}

export default BurgerModal
