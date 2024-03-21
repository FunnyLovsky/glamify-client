import { RoutesName } from '@/app/providers/router'
import { IRouteNamesObj } from '@/shared/types/IRouteNamesObj'

const routePaths: IRouteNamesObj<string> = {
    [RoutesName.SHOP]: '',
    [RoutesName.SALES]: 'sortSales=-1',
    [RoutesName.ARRIVALS]: 'sortDate=-1',
    [RoutesName.STYLES]: '',
}

export const createQuery = (pathname: string, search: string) => {
    return `${routePaths[pathname]}&${search.slice(1)}`
}
