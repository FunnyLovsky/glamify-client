/* eslint-disable jsx-a11y/no-static-element-interactions */
import styles from './FilterModal.module.scss'
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
        <div className={styles.menu} onClick={closeAnimation}>
            <div
                className={styles.cont}
                id={styles.category}
                onClick={(e) => e.stopPropagation()}
                style={{ animationName: isClose && styles.end }}
            >
                <FilterProducts type="modal" onClose={closeBurger} />
            </div>
        </div>
    )
}

export default FilterModal
