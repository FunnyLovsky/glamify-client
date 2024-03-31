import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import styles from './DeleteProductCart.module.scss'
import { FC } from 'react'
import AppButton from '@/shared/ui/AppButton'
import { deleteProductAuth, deleteProductNoAuth } from '@/entities/Cart'
import DELETE from '@/shared/assets/icons/delete.svg'

interface IProps {
    productId: string
    type: 'icon' | 'button'
}

const DeleteProductCart: FC<IProps> = ({ productId, type }) => {
    const dispatch = useAppDispatch()
    const { auth } = useAppSelector((state) => state.authReducer)

    const deleteProductToCart = () => {
        if (auth) {
            dispatch(deleteProductAuth(productId))
        } else {
            dispatch(deleteProductNoAuth(productId))
        }
    }

    return (
        <>
            {type == 'button' ? (
                <AppButton variant="delete" type="big" onClick={deleteProductToCart}>
                    Убрать из корзины
                </AppButton>
            ) : (
                <button onClick={deleteProductToCart} className={styles.icon}>
                    <DELETE />
                </button>
            )}
        </>
    )
}

export default DeleteProductCart
