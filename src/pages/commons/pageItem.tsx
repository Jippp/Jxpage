import { FC, memo, Suspense, lazy, ComponentType } from "react";
import LoadingPage from "./loading";

interface PageItemProps {
  acComp: () => Promise<{ default: ComponentType<any> }>;
}

const PageItem: FC<PageItemProps> = ({ acComp }) => {
  const Component = lazy(acComp);

  return (
    <Suspense fallback={<LoadingPage />}>
      <Component />
    </Suspense>
  );
};

export default memo(PageItem);
