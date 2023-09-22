import { useRoutes } from "react-router-dom";

import routeConfigs from "@/config/routes";
import ErrorBoundary from "@/components/commons/errorBoundary";
import ErrorPage from "@/components/commons/error";
import Index from "@/pages/index";

function App() {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Index>{useRoutes(routeConfigs)}</Index>
    </ErrorBoundary>
  );
}

export default App;
