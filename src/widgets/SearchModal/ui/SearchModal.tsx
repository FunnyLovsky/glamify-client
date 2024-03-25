/* eslint-disable jsx-a11y/no-static-element-interactions */
import styles from './SearchModal.module.scss'
import AppInput from '@/shared/ui/AppInput'
import Conatiner from '@/shared/ui/Container'
import Modal from '@/shared/ui/Modal'
import { FC, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SEACRH from '@/shared/assets/icons/search.svg'
import { useFetchProducts } from '@/entities/Product'
import { RoutesName } from '@/app/providers/router'

interface IProps {
    onClose: () => void
}

const SearchModal: FC<IProps> = ({ onClose }) => {
    const input = useRef<HTMLInputElement>()
    const [query, setQuery] = useState('')
    const navigate = useNavigate()
    const { isLoading, products } = useFetchProducts(`name=${query}`, 6)

    const closeModal = ({ key }: KeyboardEvent) => {
        if (key === 'Escape') onClose()
    }

    const onSearchProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const onSumbitSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate(`${RoutesName.SHOP}?name=${query}`)
        onClose()
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
                        <form onSubmit={onSumbitSearch}>
                            <AppInput
                                placeholder="Поиск товаров..."
                                type="text"
                                icon="search"
                                onChange={onSearchProducts}
                                ref={input}
                            />
                        </form>

                        <div className={styles.results}>
                            {products.map((item) => (
                                <Link
                                    to={`${RoutesName.SHOP}/${item.url}`}
                                    onClick={onClose}
                                    key={item.url}
                                >
                                    <SEACRH />
                                    <h3>{item.name.toLowerCase()}</h3>
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
