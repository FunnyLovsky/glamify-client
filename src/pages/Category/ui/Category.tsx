import { Breadcrumb } from '@/widgets/Breadcrumb'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { routeTitles } from '../const/routeTitles'
import { CategoryPage } from '@/widgets/CategoryPage'

const Category = () => {
    const location = useLocation()

    useEffect(() => {
        document.title = routeTitles[location.pathname]
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <>
            <Breadcrumb />
            <CategoryPage />
        </>
    )
}

export default Category
