import { useEffect } from 'react'

const Cart = () => {
    useEffect(() => {
        document.title = 'GLAMIFY - Ваша корзина покупок'
    }, [])
    return <h1>Cart Page</h1>
}

export default Cart
