// 状态边界 错误状态和loading状态
import { Suspense, FC } from "react";

import ErrorBoundary from "@/components/commons/errorBoundary";
import ErrorPage from "@/components/commons/error";
import LoadingPage from "@/components/commons/loading";

const StatusBoundary: FC<{
  children: React.ReactElement;
  loading?: boolean;
  error?: boolean | Error;
  /** 不支持suspence兼容 */
  hasSuspence?: boolean;
}> = ({ hasSuspence = true, loading, error, children }) => {
  return (
    <>
      {hasSuspence ? (
        <>
          {/* 使用nextjs 支持suspence以及use来处理 */}
          <ErrorBoundary fallback={<ErrorPage />}>
            <Suspense fallback={<LoadingPage />}>{children}</Suspense>
          </ErrorBoundary>
        </>
      ) : (
        <>{loading ? <LoadingPage /> : error ? <ErrorPage /> : children}</>
      )}
    </>
  );
};

export default StatusBoundary;
