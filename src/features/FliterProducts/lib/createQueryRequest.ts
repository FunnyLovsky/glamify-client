import { Filters } from '../types/Filters'

export const createQueryRequest = (filters: Filters) => {
    let query = '&'

    for (const key in filters) {
        const value = filters[key as keyof Filters]

        if (Array.isArray(value)) {
            if (value.length == 0) continue

            value.forEach((item) => (query += `${key}=${item}&`))
        } else {
            if (value == '') continue

            query += `${key}=${value}&`
        }
    }

    if (query.length > 0) {
        query = query.slice(0, -1)
    }

    return query
}
