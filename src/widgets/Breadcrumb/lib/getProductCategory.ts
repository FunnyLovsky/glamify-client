import { IProductDetail } from '@/entities/Product'
import { routePaths } from '../const/routePaths'
import { pathCategory } from '../const/pathCategory'

export const getProductCategory = (product: IProductDetail, pathname: string) => {
    if (product.id !== '') {
        const { gender, category, name } = product
        const path = pathname.split('/').filter((path) => routePaths[`/${path}`])[1]

        return [
            { to: `/${path}?gender=${gender}`, title: pathCategory[gender] },
            { to: `/${path}?gender=${gender}&category=${category}`, title: pathCategory[category] },
            { to: `${pathname}`, title: name },
        ]
    }
}
