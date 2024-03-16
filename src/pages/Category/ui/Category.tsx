import { RoutesName } from '@/app/providers/router'
import { Breadcrumb } from '@/widgets/Breadcrumb'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface RouteTitles {
    [key: string]: string
}

const routeTitles: RouteTitles = {
    [RoutesName.SHOP]: 'GLAMIFY - Популярные товары для стильного образа',
    [RoutesName.SALES]: 'GLAMIFY - Лучшие скидки на модную одежду',
    [RoutesName.ARRIVALS]: 'GLAMIFY - Свежие поступления в мире моды',
    [RoutesName.STYLES]: 'GLAMIFY - Вдохновляющие стили и образы',
}

const Category = () => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const category = params.get('category')

    useEffect(() => {
        document.title = routeTitles[location.pathname]
    }, [location.pathname])

    return (
        <>
            <Breadcrumb />
            <h1>Category: {category}</h1>
        </>
    )
}

export default Category
