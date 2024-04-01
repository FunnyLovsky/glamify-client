/* eslint-disable jsx-a11y/no-static-element-interactions */
import styles from './BurgerModal.module.scss'
import Modal from '@/shared/ui/Modal'
import { FC } from 'react'
import { RoutesName } from '@/app/providers/router'
import AppLink from '@/shared/ui/AppLink'

interface IProps {
    onClose: () => void
}

const BurgerModal: FC<IProps> = ({ onClose }) => {
    return (
        <Modal onClick={onClose}>
            <div className={styles.menu}>
                <div
                    className={styles.cont}
                    id={styles.category}
                    onClick={(e) => e.stopPropagation()}
                >
                    <AppLink href={RoutesName.SHOP} type="text" onClick={onClose}>
                        Товары
                    </AppLink>
                    <AppLink href={RoutesName.SALES} type="text" onClick={onClose}>
                        Скидки
                    </AppLink>
                    <AppLink href={RoutesName.ARRIVALS} type="text" onClick={onClose}>
                        Новинки
                    </AppLink>
                    <AppLink href={RoutesName.STYLES} type="text" onClick={onClose}>
                        Стили
                    </AppLink>
                </div>
            </div>
        </Modal>
    )
}

export default BurgerModal
