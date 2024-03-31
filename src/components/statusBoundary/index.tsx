// 状态边界 错误状态和loading状态
import { Suspense, FC } from "react";

import ErrorBoundary from "@/components/commons/errorBoundary";
import ErrorPage from "@/components/commons/error";
import LoadingPage from "@/components/commons/loading";

const StatusBoundary: FC<{
  children: React.ReactElement;
}> = ({ children }) => {
  return (
    // 使用nextjs 支持suspence以及use来处理
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<LoadingPage />}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default StatusBoundary;
