import { Breadcrumb } from '@/widgets/Breadcrumb'
import { CartProduct } from '@/widgets/CartProduct'
import { useEffect } from 'react'

const Cart = () => {
    useEffect(() => {
        document.title = 'GLAMIFY - Ваша корзина покупок'
    }, [])
    return (
        <>
            <Breadcrumb />
            <CartProduct />
        </>
    )
}

export default Cart
