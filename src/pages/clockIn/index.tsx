/**
 * 打卡详情页
 */
import { FC } from "react";
import cn from "classnames";

import Screen from "./components/Screen";
import Calendar from "./components/Calendar";
import Total from "./components/Total";
import Styles from "./style.module.less";

const ClockInPage: FC = () => {
  return (
    <div className={cn(Styles.wrapper, "moduleWrapper")}>
      <div className={cn(Styles.content, "blurBg")}>
        <div>
          <Screen />
          <Calendar />
          <Total />
        </div>
      </div>
    </div>
  );
};

export default ClockInPage;
