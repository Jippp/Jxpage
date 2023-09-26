import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import routeConfigs from "@/config/routes";
import ErrorBoundary from "@/components/commons/errorBoundary";
import ErrorPage from "@/components/commons/error";
import LoadingPage from "@/components/commons/loading";
import Index from "@/pages/index";

function App() {
  return (
    // 路由页面首次渲染是异步组件，后面有缓存时变成同步组件：
    // 异步组件要用Suspense包裹在外层，否则报错：
    /* 
      A component suspended while responding to synchronous input. 
      This will cause the UI to be replaced with a loading indicator. 
      To fix, updates that suspend should be wrapped with startTransition.
    */
    // Suspense原理是：
    /* 
      子组件throw一个promise，在状态未改变之前都渲染fallback内容，状态改变渲染子组件
      1. 对throw出的promise追加一个then，在then里面重新执行Suspense，即更新Suspense
      2. loading渲染fallback，resolve更新Suspense内容，reject会throw一个error，被外层ErrorBoundary捕获
    */
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<LoadingPage />}>
        <Index>{useRoutes(routeConfigs)}</Index>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
