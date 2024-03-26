/* eslint-disable jsx-a11y/no-static-element-interactions */
import styles from './Modal.module.scss'
import { FC, useEffect } from 'react'
import { IPropsChildren } from '@/shared/types/IComponents'
import { createPortal } from 'react-dom'

interface IProps extends IPropsChildren {
    onClick: () => void
}

const Modal: FC<IProps> = ({ children, onClick }) => {
    const closeModal = ({ key }: KeyboardEvent) => {
        if (key === 'Escape') onClick()
    }

    useEffect(() => {
        document.body.style.paddingRight = '18px'
        document.body.style.overflow = 'hidden'
        document.addEventListener('keydown', closeModal)

        return () => {
            document.body.style.overflow = 'auto'
            document.body.style.paddingRight = ''
            document.removeEventListener('keydown', closeModal)
        }
    }, [])

    return createPortal(
        <div className={styles.back} onClick={onClick}>
            <div className={styles.modal}>{children}</div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal
