// import { IPropsChildren } from '@/shared/types/IComponents'
// import { FC, Suspense } from 'react'
// // import styles from './AsyncComponent.module.scss'
// import { Await } from 'react-router-dom'

// interface IProps extends IPropsChildren {
//     loader: React.ReactNode
//     data: Promise<any>
//     error: React.ReactNode
// }

// const AsyncComponent: FC<IProps> = ({ children, data, error, loader }) => {
//     return (
//         <Suspense fallback={loader}>
//             <Await resolve={data} errorElement={error}>
//                 {children}
//             </Await>
//         </Suspense>
//     )
// }

// export default AsyncComponent
