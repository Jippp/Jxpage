import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import routeConfigs from "@/config/routes";
import ErrorBoundary from "@/components/commons/errorBoundary";
import ErrorPage from "@/components/commons/error";
import LoadingPage from "@/components/commons/loading";
import Index from "@/pages/index";

function App() {
  return (
    // Suspense应该在ErrorBoundary之前
    // 放在内部必须是异步组件，同步组件会有这个错误：
    /* 
      A component suspended while responding to synchronous input. 
      This will cause the UI to be replaced with a loading indicator. 
      To fix, updates that suspend should be wrapped with startTransition.
    */
    <Suspense fallback={<LoadingPage />}>
      <ErrorBoundary fallback={<ErrorPage />}>
        <Index>{useRoutes(routeConfigs)}</Index>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
