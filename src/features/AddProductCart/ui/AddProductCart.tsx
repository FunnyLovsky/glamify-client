import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
// import styles from './UpdateProductCart.module.scss'
import { FC } from 'react'
import AppButton from '@/shared/ui/AppButton'
import { addProductAuth, addProductNoAuth } from '@/entities/Cart'
import { useLocation } from 'react-router-dom'

type Product = { color: string; size: string }

interface IProps {
    product: Product
}

const AddProductCart: FC<IProps> = ({ product }) => {
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const { productDetail } = useAppSelector((state) => state.productReducer)
    const { id, image, name, price, discount } = productDetail
    const { auth } = useAppSelector((state) => state.authReducer)

    const addProductToCart = () => {
        if (auth) {
            dispatch(addProductAuth({ ...product, productId: id, count: 1 }))
        } else {
            dispatch(
                addProductNoAuth({
                    ...product,
                    count: 1,
                    discount,
                    id,
                    image,
                    name,
                    price,
                    url: pathname.split('/')[2],
                })
            )
        }
    }

    return (
        <>
            <AppButton variant="black" type="big" onClick={addProductToCart}>
                Добавить в корзину
            </AppButton>
        </>
    )
}

export default AddProductCart
