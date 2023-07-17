import { FC, memo, Suspense } from 'react'
import LoadingPage from './loading'

interface PageItemProps {
  component: React.ReactNode
}

const PageItem: FC<PageItemProps> = ({ component }) => {
  return (
    <Suspense fallback={<LoadingPage />}>
      {component}
    </Suspense>
  )
}

export default memo(PageItem)