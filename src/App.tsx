import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import routeConfigs from "@/config/routes";
import ErrorBoundary from "@/components/commons/errorBoundary";
import ErrorPage from "@/components/commons/error";
import LoadingPage from "@/components/commons/loading";
import PageLayout from "@/components/layout/pageLayout";

function App() {
  return (
    // 路由页面首次渲染是异步组件，后面有缓存时变成同步组件：
    // 异步组件要用Suspense包裹在外层，否则报错：
    /* 
      A component suspended while responding to synchronous input. 
      This will cause the UI to be replaced with a loading indicator. 
      To fix, updates that suspend should be wrapped with startTransition.
    */
    <ErrorBoundary fallback={<ErrorPage />}>
      <PageLayout>
        <Suspense fallback={<LoadingPage />}>
          {useRoutes(routeConfigs)}
        </Suspense>
      </PageLayout>
    </ErrorBoundary>
  );
}

export default App;
