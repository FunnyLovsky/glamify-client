import { RoutesName } from '@/app/providers/router'
import { IRouteNamesObj } from '@/shared/types/IRouteNamesObj'

export const routePaths: IRouteNamesObj<string> = {
    [RoutesName.SHOP]: 'Магазин',
    [RoutesName.SALES]: 'Скидки',
    [RoutesName.ARRIVALS]: 'Новинки',
    [RoutesName.STYLES]: 'Стили',
    [RoutesName.MAIN]: 'Главная',
    [RoutesName.AUTH]: 'Авторизация',
    [RoutesName.PROFILE]: 'Профиль',
}
