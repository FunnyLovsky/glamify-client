import styles from './Checkbox.module.scss'
import { FC, useId } from 'react'

interface IProps {
    title: string
    checked: boolean
    onChange: () => void
}

const Checkbox: FC<IProps> = ({ title, checked, onChange }) => {
    const id = useId()
    return (
        <div className={styles.check}>
            <label htmlFor={id}>{title}</label>
            <input type="checkbox" checked={checked} onChange={onChange} id={id} />
        </div>
    )
}

export default Checkbox
