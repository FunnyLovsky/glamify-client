import styles from './ColorBtn.module.scss'
import CHECKED from '@/shared/assets/elements/checked.svg'
import { FC } from 'react'
import { Colors } from '../../types/IProduct'

interface IProps {
    color: Colors
    check: boolean
    onChange: (color: string) => void
}

const ColorBtn: FC<IProps> = ({ onChange, color, check }) => {
    return (
        <button
            style={{ background: color.code }}
            key={color.code}
            className={styles.color_item}
            onClick={() => onChange(color.name)}
        >
            {check && <CHECKED color={color.name == 'White' ? 'black' : 'white'} />}
        </button>
    )
}

export default ColorBtn
