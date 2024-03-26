/* eslint-disable jsx-a11y/no-static-element-interactions */
import AppForm from '@/shared/ui/AppForm'
import styles from './PaymentModal.module.scss'
import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import AppInput from '@/shared/ui/AppInput'
import Modal from '@/shared/ui/Modal'
import { FC } from 'react'

interface IProps {
    onClose: () => void
    total: number
}

const PaymentModal: FC<IProps> = ({ onClose, total }) => {
    const { cartProducts } = useAppSelector((state) => state.cartReducer)

    return (
        <Modal onClick={onClose}>
            <div className={styles.cont}>
                <div className={styles.payment} onClick={(e) => e.stopPropagation()}>
                    <AppForm
                        btn={`Оплатить ${total}₽`}
                        error={null}
                        isLoading={false}
                        onSubmit={onClose}
                        title="Оплата"
                    >
                        <AppInput icon="promo" type="number" placeholder="Номер карты..." />
                        <AppInput icon="promo" type="text" placeholder="Имя владельца..." />
                    </AppForm>
                </div>
            </div>
        </Modal>
    )
}

export default PaymentModal
