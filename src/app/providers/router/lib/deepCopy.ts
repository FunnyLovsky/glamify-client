import { RouteObject } from 'react-router-dom'

export const deepCopy = (arr: RouteObject[]): RouteObject[] => {
    const result: RouteObject[] = []

    arr.forEach((route) => {
        const copiedRoute: RouteObject = {
            ...route,
            element: route.element,
        }

        if (route.children) {
            copiedRoute.children = deepCopy(route.children)
        }

        result.push(copiedRoute)
    })

    return result
}
