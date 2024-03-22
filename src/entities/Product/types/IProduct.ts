export interface IProduct {
    name: string
    rating: number
    price: number
    discount: number | null
    url: string
    image: string
}

export interface IProductDetail {
    id: string
    name: string
    image: string
    rating: number
    price: number
    discount: number | null
    category: string
    gender: string
    style: string
    description: string
    sizes: string[]
    details: [string[]]
    colors: Colors[]
}

export interface Colors {
    name: string
    code: string
    images?: string[]
}
