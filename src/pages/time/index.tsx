/**
 * 记录页
 */
import { FC } from "react";
import cn from "classnames";

import Styles from "./style.module.less";

const TimePage: FC<any> = () => {
  return (
    <div className={cn(Styles.wrapper, "moduleWrapper blurBg")}>
      <div>TimePage Loading...</div>
    </div>
  );
};

export default TimePage;
