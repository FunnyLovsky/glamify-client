import { Breadcrumb } from '@/widgets/Breadcrumb'
import { CategoryList } from '@/widgets/CategoryList'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { routeTitles } from '../const/routeTitles'

const Category = () => {
    const location = useLocation()

    useEffect(() => {
        document.title = routeTitles[location.pathname]
    }, [location.pathname])

    return (
        <>
            <Breadcrumb />
            <CategoryList />
        </>
    )
}

export default Category
