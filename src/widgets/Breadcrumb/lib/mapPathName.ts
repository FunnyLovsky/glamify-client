import { pathCategory } from '../const/pathCategory'
import { routePaths } from '../const/routePaths'

export const mapPathName = (pathname: string, search: string) => {
    const crumbs = pathname
        .split('/')
        .filter((path) => routePaths[`/${path}`])
        .map((path) => ({
            to: `/${path}`,
            title: routePaths[`/${path}`],
        }))

    if (search !== '') {
        const paths = []
        const searchParams = new URLSearchParams(search)

        const gender = searchParams.get('gender')
        if (gender) {
            paths.push({ to: `${pathname}?gender=${gender}`, title: pathCategory[gender] })
        }

        const category = searchParams.get('category')

        if (category) {
            paths.push({
                to: `${pathname}?gender=${gender}&category=${category}`,
                title: pathCategory[category],
            })
        }

        crumbs.push(...paths)
    }

    return crumbs
}
