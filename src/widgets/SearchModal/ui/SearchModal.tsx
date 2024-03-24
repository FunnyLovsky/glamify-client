/* eslint-disable jsx-a11y/no-static-element-interactions */
import styles from './SearchModal.module.scss'
import AppInput from '@/shared/ui/AppInput'
import Conatiner from '@/shared/ui/Container'
import Modal from '@/shared/ui/Modal'
import { FC, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import SEACRH from '@/shared/assets/icons/search.svg'

interface IProps {
    onClose: () => void
}

const SearchModal: FC<IProps> = ({ onClose }) => {
    const input = useRef<HTMLInputElement>()

    const closeModal = ({ key }: KeyboardEvent) => {
        if (key === 'Escape') onClose()
    }

    useEffect(() => {
        input.current.focus()
        document.addEventListener('keydown', closeModal)

        return () => {
            document.removeEventListener('keydown', closeModal)
        }
    }, [])

    return (
        <Modal onClick={onClose}>
            <Conatiner>
                <div className={styles.cont}>
                    <div className={styles.search} onClick={(e) => e.stopPropagation()}>
                        <AppInput
                            placeholder="Поиск товаров..."
                            type="text"
                            icon="search"
                            onFocus={() => console.log('search')}
                            ref={input}
                        />
                        <div className={styles.results}>
                            <Link to={'/'} onClick={onClose}>
                                <SEACRH />
                                <h3>T-Shirts</h3>
                            </Link>
                            <Link to={'/'} onClick={onClose}>
                                <SEACRH />
                                <h3>T-Shirts</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </Conatiner>
        </Modal>
    )
}

export default SearchModal
