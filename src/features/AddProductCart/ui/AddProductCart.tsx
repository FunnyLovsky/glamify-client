import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
// import styles from './UpdateProductCart.module.scss'
import { FC } from 'react'
import AppButton from '@/shared/ui/AppButton'
import { addProductAuth } from '@/entities/Cart'
import AppLink from '@/shared/ui/AppLink'
import { RoutesName } from '@/app/providers/router'

type Product = { color: string; size: string }

interface IProps {
    product: Product
}

const AddProductCart: FC<IProps> = ({ product }) => {
    const dispatch = useAppDispatch()
    const { productDetail } = useAppSelector((state) => state.productReducer)
    const { auth } = useAppSelector((state) => state.authReducer)

    const addProductToCart = () => {
        if (auth) {
            dispatch(addProductAuth({ ...product, productId: productDetail.id, count: 1 }))
        }
    }

    return (
        <>
            {auth ? (
                <AppButton variant="black" type="big" onClick={addProductToCart}>
                    Добавить в корзину
                </AppButton>
            ) : (
                <AppLink href={RoutesName.AUTH} type="button">
                    Авторизуйтесь чтобы добавить товар
                </AppLink>
            )}
        </>
    )
}

export default AddProductCart
