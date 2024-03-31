export interface ICartProduct {
    image: string
    name: string
    price: number
    discount: number | null
    color: string
    size: string
    count: number
    id: string
    url: string
}

export interface ICartResponse {
    cart: ICartProduct[]
}

export interface ICartRequest {
    color: string
    size: string
    count: number
    productId: string
}
