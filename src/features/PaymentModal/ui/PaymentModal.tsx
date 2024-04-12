/* eslint-disable jsx-a11y/no-static-element-interactions */
import AppForm from '@/shared/ui/AppForm'
import styles from './PaymentModal.module.scss'
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import AppInput from '@/shared/ui/AppInput'
import { FC, useEffect, useRef, useState } from 'react'
import Conatiner from '@/shared/ui/Container'
import { deleteProductAuth } from '@/entities/Cart'
import { useNavigate } from 'react-router-dom'
import { RoutesName } from '@/app/providers/router'

interface IProps {
    total: number
    closeModal: () => void
}

const PaymentModal: FC<IProps> = ({ total, closeModal }) => {
    const { isLoading, error, cartProducts } = useAppSelector((state) => state.cartReducer)
    const dispatch = useAppDispatch()
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    const nameRef = useRef<HTMLInputElement>(null)
    const cardRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        cardRef.current.focus()
    }, [])

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (value.length == 19) {
            dispatch(deleteProductAuth(''))
        }
    }

    const backToMain = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        closeModal()
        setTimeout(() => {
            navigate(RoutesName.MAIN)
        }, 200)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputCardNumber = event.target.value

        const cleanedNumber = inputCardNumber.replace(/\D/g, '')

        const truncatedNumber = cleanedNumber.slice(0, 16)

        const chunks = truncatedNumber.match(/.{1,4}/g)

        const formattedNumber = chunks ? chunks.join(' ') : ''

        setValue(formattedNumber)
        if (truncatedNumber.length === 16 && nameRef.current) {
            nameRef.current.focus()
        }
    }

    const formOrder = (
        <AppForm
            btn={`Оплатить ${total}₽`}
            error={error}
            isLoading={isLoading}
            onSubmit={onSubmit}
            title="Оплата"
        >
            <AppInput
                icon="card"
                type="text"
                placeholder="Номер карты..."
                required={true}
                value={value}
                onChange={handleChange}
                ref={cardRef}
            />
            <AppInput
                icon="user"
                type="text"
                placeholder="Имя владельца..."
                required={true}
                ref={nameRef}
            />
        </AppForm>
    )

    const successOrder = (
        <AppForm
            title="Оплата прошла успешно!"
            btn="Вернуться в магазин"
            error={error}
            isLoading={isLoading}
            onSubmit={backToMain}
        >
            <p>Спасибо за доверие! В ближайшее время мы подготовим ваш заказ к отправке.</p>
        </AppForm>
    )

    return (
        <Conatiner>
            <div className={styles.cont}>
                <div className={styles.payment} onClick={(e) => e.stopPropagation()}>
                    {cartProducts.length == 0 ? successOrder : formOrder}
                </div>
            </div>
        </Conatiner>
    )
}

export default PaymentModal
