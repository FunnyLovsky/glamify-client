import { ICartProduct } from '../../types/ICartProduct'

export class CartProductDto {
    static getProducts() {
        const products = JSON.parse(localStorage.getItem('products') || '[]') as ICartProduct[]
        return products.map((item) => ({
            productId: item.id,
            color: item.color,
            size: item.size,
            count: item.count,
        }))
    }
}
