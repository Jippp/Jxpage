import { FC } from "react";
import cn from "classnames";

import BlurGlass from "@/components/BlurGlass";

import Styles from "./style.module.less";
import CommonStyles from "../../style.module.less";

const Screen: FC<any> = () => {
  return (
    <BlurGlass className={cn(CommonStyles["blurGlass-item"], Styles.search)}>
      搜索相关区域
    </BlurGlass>
  );
};

export default Screen;
