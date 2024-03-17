import { IPropsChildren } from '@/shared/types/IComponents'
import LoaderPage from '@/shared/ui/LoaderPage'
import { FC, Suspense } from 'react'

const SuspenseWrapper: FC<IPropsChildren> = ({ children }) => (
    <Suspense fallback={<LoaderPage />}>{children}</Suspense>
)

export default SuspenseWrapper
