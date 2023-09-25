/**
 * 打卡详情页
 */
import { FC } from "react";
import cn from "classnames";

import Styles from "./style.module.less";

const ClockInPage: FC = () => {
  return (
    <div className={cn(Styles.wrapper, "moduleWrapper", "blurBg")}>
      <div className={Styles.content}>
        <div className={Styles.search}>搜索相关区域</div>
        <div className={Styles.calendar}>打卡详情日历图区域</div>
        <div className={Styles.total}>打卡统计的贡献图区域</div>
      </div>
    </div>
  );
};

export default ClockInPage;
