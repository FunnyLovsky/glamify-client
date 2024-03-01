import { RoutesName } from '@/app/providers/router'
import styles from './ArrivalsList.module.scss'
import Conatiner from '@/shared/ui/Container'
import { ProductList } from '@/features/ProductList'
import { IProduct } from '@/entities/Product'

const ArrivalsList = () => {
    const products: IProduct[] = [
        {
            name: "Футболка 'Городские волны'",
            image: 'urban_waves_tshirt.jpg',
            rating: 4.5,
            price: 1499,
            discount: 10,
            url: 'futbolka-gorodskie-volny',
        },
        {
            name: "Футболка 'Уличный стиль'",
            image: 'street_style_tshirt.jpg',
            rating: 4,
            price: 1299,
            discount: 15,
            url: 'futbolka-ulichnyy-stil',
        },
        {
            name: "Рубашка 'Городской стиль'",
            image: 'urban_style_shirt.jpg',
            rating: 4.2,
            price: 2799,
            discount: null,
            url: 'rubashka-gorodskoy-stil',
        },
        {
            name: "Блузка 'Весеннее настроение'",
            image: 'spring_mood_blouse.jpg',
            rating: 4.7,
            price: 1999,
            discount: null,
            url: 'bluzka-vesennee-nastroenie',
        },
    ]
    return (
        <Conatiner>
            <ProductList title="Новинки" data={products} catalog={RoutesName.ARRIVALS} />
            <ProductList title="Распродажа" data={products} catalog={RoutesName.SALES} />
        </Conatiner>
    )
}

export default ArrivalsList
