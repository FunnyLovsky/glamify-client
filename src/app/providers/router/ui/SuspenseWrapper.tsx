import { IPropsChildren } from '@/shared/types/IComponents'
import { FC, Suspense } from 'react'

const SuspenseWrapper: FC<IPropsChildren> = ({ children }) => (
    <Suspense fallback={<h1>Loading Page</h1>}>{children}</Suspense>
)

export default SuspenseWrapper
