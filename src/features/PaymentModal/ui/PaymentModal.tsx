/* eslint-disable jsx-a11y/no-static-element-interactions */
import AppForm from '@/shared/ui/AppForm'
import styles from './PaymentModal.module.scss'
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import AppInput from '@/shared/ui/AppInput'
import Modal from '@/shared/ui/Modal'
import { FC } from 'react'
import Conatiner from '@/shared/ui/Container'
import { deleteProductAuth } from '@/entities/Cart'

interface IProps {
    onClose: () => void
    total: number
}

const PaymentModal: FC<IProps> = ({ onClose, total }) => {
    const { isLoading, error } = useAppSelector((state) => state.cartReducer)
    const dispatch = useAppDispatch()

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(deleteProductAuth(''))
    }

    return (
        <Conatiner>
            <div className={styles.cont}>
                <div className={styles.payment} onClick={(e) => e.stopPropagation()}>
                    <AppForm
                        btn={`Оплатить ${total}₽`}
                        error={error}
                        isLoading={isLoading}
                        onSubmit={onSubmit}
                        title="Оплата"
                    >
                        <AppInput icon="promo" type="number" placeholder="Номер карты..." />
                        <AppInput icon="promo" type="text" placeholder="Имя владельца..." />
                    </AppForm>
                </div>
            </div>
        </Conatiner>
    )
}

export default PaymentModal
