import { FC, forwardRef, ForwardedRef } from "react";

import cn from "classnames";

interface Props {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

const BlurGlass: FC<Props> = forwardRef(
  (
    { className, children, ...restProps },
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div className={cn(className, "blurGlass")} {...restProps} ref={ref}>
        <div>{children}</div>
      </div>
    );
  },
);

export default BlurGlass;
