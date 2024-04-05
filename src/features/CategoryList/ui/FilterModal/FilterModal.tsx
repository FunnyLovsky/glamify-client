/* eslint-disable jsx-a11y/no-static-element-interactions */
import styles from './FilterModal.module.scss'
import Modal from '@/shared/ui/Modal'
import { FC, useState } from 'react'
import { FilterProducts } from '@/features/FliterProducts'

interface IProps {
    onClose: () => void
}

const FilterModal: FC<IProps> = ({ onClose }) => {
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
        <Modal onClick={onClose} onCloseAnimation={closeAnimation}>
            <div className={styles.menu}>
                <div
                    className={styles.cont}
                    id={styles.category}
                    onClick={(e) => e.stopPropagation()}
                    style={{ animationName: isClose && styles.end }}
                >
                    <FilterProducts type="modal" onClose={closeBurger} />
                </div>
            </div>
        </Modal>
    )
}

export default FilterModal
