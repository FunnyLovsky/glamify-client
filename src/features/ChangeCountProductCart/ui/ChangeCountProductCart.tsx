import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import styles from './ChangeCountProductCart.module.scss'
import { FC } from 'react'
import { ICartProduct, changeCountProductAuth, changeCountProductNoAuth } from '@/entities/Cart'
import PLUS from '@/shared/assets/elements/plus.svg'
import MINUS from '@/shared/assets/elements/minus.svg'

interface IProps {
    productCart: ICartProduct
    type?: 'big' | 'small'
}

const ChangeCountProductCart: FC<IProps> = ({ productCart, type = 'big' }) => {
    const dispatch = useAppDispatch()
    const { auth } = useAppSelector((state) => state.authReducer)
    const { count, id: productId } = productCart

    const changeCountProductToCart = (count: number) => {
        if (auth) {
            dispatch(changeCountProductAuth({ productId, count }))
        } else {
            dispatch(changeCountProductNoAuth(productId, count))
        }
    }

    return (
        <div className={styles[`cont_${type}`]}>
            <button
                disabled={count == 1}
                onClick={() => changeCountProductToCart(count - 1)}
                className={styles.minus}
            >
                <MINUS />
            </button>
            <div>
                <p>{productCart.count}</p>
            </div>
            <button onClick={() => changeCountProductToCart(count + 1)} className={styles.plus}>
                <PLUS />
            </button>
        </div>
    )
}

export default ChangeCountProductCart
