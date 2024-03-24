/* eslint-disable jsx-a11y/no-static-element-interactions */
import styles from './SearchModal.module.scss'
import AppInput from '@/shared/ui/AppInput'
import Conatiner from '@/shared/ui/Container'
import Modal from '@/shared/ui/Modal'
import { FC, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SEACRH from '@/shared/assets/icons/search.svg'
import { useFetchProducts } from '@/entities/Product'
import { RoutesName } from '@/app/providers/router'

interface IProps {
    onClose: () => void
}

const SearchModal: FC<IProps> = ({ onClose }) => {
    const input = useRef<HTMLInputElement>()
    const [query, setQuery] = useState('')
    const { isLoading, products, error } = useFetchProducts(query)

    const closeModal = ({ key }: KeyboardEvent) => {
        if (key === 'Escape') onClose()
    }

    const onSearchProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(`name=${e.target.value}`)
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
                            onChange={onSearchProducts}
                            ref={input}
                        />
                        <div className={styles.results}>
                            {products.map((item) => (
                                <Link
                                    to={`${RoutesName.SHOP}/${item.url}`}
                                    onClick={onClose}
                                    key={item.url}
                                >
                                    <SEACRH />
                                    <h3>{item.name}</h3>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </Conatiner>
        </Modal>
    )
}

export default SearchModal
