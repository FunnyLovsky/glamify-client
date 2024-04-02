/* eslint-disable jsx-a11y/no-static-element-interactions */
import styles from './Modal.module.scss'
import { FC, useEffect, useState } from 'react'
import { IPropsChildren } from '@/shared/types/IComponents'
import { createPortal } from 'react-dom'

interface IProps extends IPropsChildren {
    onClick: () => void
    onCloseAnimation?: () => void | null
}

const Modal: FC<IProps> = ({ children, onClick, onCloseAnimation = null }) => {
    const [isClose, setIsClose] = useState(false)

    const closeModal = () => {
        setIsClose(true)
        if (onCloseAnimation) onCloseAnimation()

        setTimeout(() => {
            onClick()
        }, 200)
    }

    const onKeyDown = ({ key }: KeyboardEvent) => {
        if (key === 'Escape') closeModal()
    }

    useEffect(() => {
        if (document.body.offsetWidth > 650) {
            document.body.style.paddingRight = '18px'
            document.body.style.overflow = 'hidden'
        }

        document.addEventListener('keydown', onKeyDown)

        return () => {
            if (document.body.offsetWidth > 650) {
                document.body.style.overflow = 'auto'
                document.body.style.paddingRight = ''
            }

            document.removeEventListener('keydown', onKeyDown)
        }
    }, [])

    return createPortal(
        <div
            className={styles.back}
            onClick={closeModal}
            style={{ animationName: isClose && styles.close }}
        >
            <div className={styles.modal}>{children}</div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal
