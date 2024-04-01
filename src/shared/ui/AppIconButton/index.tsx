import styles from './AppIconButton.module.scss'
import { FC } from 'react'
import SEACRH from '@/shared/assets/icons/search.svg'
import BURGER from '@/shared/assets/icons/burger.svg'

interface IProps {
    onClick: () => void
    icon: 'search' | 'burger'
}

const icons = {
    search: SEACRH,
    burger: BURGER,
}

const AppIconButton: FC<IProps> = ({ onClick, icon }) => {
    const SVGIcon = icons[icon]
    return (
        <button onClick={onClick} className={styles.btn}>
            <SVGIcon />
        </button>
    )
}

export default AppIconButton
