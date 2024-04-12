/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import styles from './Modal.module.scss'
import { FC, forwardRef, useImperativeHandle, useState } from 'react'
import { IPropsChildren } from '@/shared/types/IComponents'
import { createPortal } from 'react-dom'
import { ModalOptions } from '@/shared/types/ModalOptions'

interface IProps extends IPropsChildren {
    onClick?: () => void
    withAnimation?: boolean
    ref: React.ForwardedRef<ModalOptions>
}

const changeOverflow = (isClose: boolean) => {
    if (document.body.offsetWidth > 650) {
        document.body.style.paddingRight = isClose ? '18px' : ''
    }
    document.body.style.overflow = isClose ? 'hidden' : 'auto'
}

const Modal: FC<IProps> = forwardRef<ModalOptions, IProps>(function Modal(props, ref) {
    const { children, withAnimation = false } = props
    const [isClose, setIsClose] = useState(false)
    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true)
        changeOverflow(true)
        setIsClose(false)
        document.addEventListener('keydown', onKeyDown)
    }

    const closeModal = () => {
        if (withAnimation) {
            setTimeout(() => {
                setIsClose(true)
            }, 200)
        } else {
            setIsClose(true)
        }

        setTimeout(() => {
            setModal(false)
            changeOverflow(false)
        }, 200)

        document.removeEventListener('keydown', onKeyDown)
    }

    useImperativeHandle(
        ref,
        () => ({
            close() {
                closeModal()
            },
            open() {
                openModal()
            },
        }),
        []
    )
    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') closeModal()
    }

    return modal
        ? createPortal(
              <div
                  className={styles.back}
                  onClick={closeModal}
                  style={{ animationName: isClose && styles.close }}
              >
                  {children}
              </div>,
              document.querySelector('#modal')
          )
        : null
})

export default Modal
