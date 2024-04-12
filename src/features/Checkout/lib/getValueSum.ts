import { ICartProduct } from '@/entities/Cart'

export const getValueSum = (cartProducts: ICartProduct[]) => {
    const subtotal = cartProducts.reduce((acc, { price, count }) => price * count + acc, 0)
    const discount = cartProducts.reduce((acc, { price, discount, count }) => {
        return acc + (discount ? Math.floor((price * discount) / 100) * count : 0)
    }, 0)
    const total = subtotal - discount
    return { subtotal, discount, total }
}
