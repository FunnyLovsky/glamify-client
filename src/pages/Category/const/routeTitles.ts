import { RoutesName } from '@/app/providers/router'

interface RouteTitles {
    [key: string]: string
}

export const routeTitles: RouteTitles = {
    [RoutesName.SHOP]: 'GLAMIFY - Популярные товары для стильного образа',
    [RoutesName.SALES]: 'GLAMIFY - Лучшие скидки на модную одежду',
    [RoutesName.ARRIVALS]: 'GLAMIFY - Свежие поступления в мире моды',
    [RoutesName.STYLES]: 'GLAMIFY - Вдохновляющие стили и образы',
}
