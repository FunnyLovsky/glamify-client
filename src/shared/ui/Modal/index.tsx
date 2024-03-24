/* eslint-disable jsx-a11y/no-static-element-interactions */
import styles from './Modal.module.scss'
import { FC } from 'react'
import { IPropsChildren } from '@/shared/types/IComponents'
import { createPortal } from 'react-dom'

interface IProps extends IPropsChildren {
    onClick: () => void
}

const Modal: FC<IProps> = ({ children, onClick }) => {
    return createPortal(
        <div className={styles.back} onClick={onClick}>
            <div className={styles.modal}>{children}</div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal
