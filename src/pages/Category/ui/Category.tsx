import { useLocation } from 'react-router-dom'

const Category = () => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const category = params.get('category')
    return <h1>Category: {category}</h1>
}

export default Category
