import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
// import styles from './UpdateProductCart.module.scss'
import { FC } from 'react'
import AppButton from '@/shared/ui/AppButton'
import { addProductAuth, deleteProductAuth } from '@/entities/Cart'

type Product = { color: string; size: string }

interface IProps {
    product: Product
}

const UpdateProductCart: FC<IProps> = ({ product }) => {
    const dispatch = useAppDispatch()
    const { productDetail } = useAppSelector((state) => state.productReducer)
    const { auth } = useAppSelector((state) => state.authReducer)
    const { cartProducts } = useAppSelector((state) => state.cartReducer)

    const addProductToCart = () => {
        if (auth) {
            dispatch(addProductAuth({ ...product, productId: productDetail.id, count: 1 }))
        }
    }

    const deleteProductToCart = () => {
        if (auth) {
            dispatch(deleteProductAuth(productDetail.id))
        }
    }

    const deleteProductBtn = (
        <AppButton variant="delete" type="big" onClick={deleteProductToCart}>
            Убрать из корзины
        </AppButton>
    )

    const addProductBtn = (
        <AppButton variant="black" type="big" onClick={addProductToCart}>
            Добавить в корзину
        </AppButton>
    )
    console.log(cartProducts)

    const filterProducts = cartProducts.filter((product) => product.id == productDetail.id)

    return <>{filterProducts.length == 0 ? addProductBtn : deleteProductBtn}</>
}

export default UpdateProductCart
