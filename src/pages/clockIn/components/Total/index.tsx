import { FC } from "react";
import cn from "classnames";

import BlurGlass from "@/components/BlurGlass";

import Styles from "./style.module.less";
import CommonStyles from "../../style.module.less";

const Screen: FC<any> = () => {
  return (
    <BlurGlass className={cn(CommonStyles["blurGlass-item"], Styles.total)}>
      打卡统计的贡献图区域
    </BlurGlass>
  );
};

export default Screen;
