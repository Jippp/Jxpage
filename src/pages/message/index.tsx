/**
 * 留言页
 */
import { FC } from "react";
import cn from "classnames";

import Styles from "./style.module.less";

const MessagePage: FC<any> = () => {
  return (
    <div className={cn(Styles.wrapper, "moduleWrapper")}>
      <div className={cn(Styles.content, "blurBg")}>
        <div>MessagePage Loading...</div>
      </div>
    </div>
  );
};

export default MessagePage;
