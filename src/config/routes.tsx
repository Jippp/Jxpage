import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

import PageItem from '@/pages/commons/pageItem'

const Home = lazy(() => import('@/pages/home'))
const NoPage = lazy(() => import('@/pages/commons/404'))

const routeConfigs: RouteObject[] = [
  {
    path: '/',
    element: <PageItem component={<Home />} />
  },
  {
    path: '*',
    element: <PageItem component={<NoPage />} />
  }
]

export default routeConfigs