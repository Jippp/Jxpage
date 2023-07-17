import { useRoutes } from 'react-router-dom'
import routeConfigs from '@/config/routes'
import ErrorBoundary from '@/pages/commons/errorBoundary'
import ErrorPage from '@/pages/commons/error'

function App() {
  return <ErrorBoundary fallback={<ErrorPage />}>{useRoutes(routeConfigs)}</ErrorBoundary>;
}

export default App;
