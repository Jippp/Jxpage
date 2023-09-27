import { FC, useRef } from "react";
import cn from "classnames";
import { useMemoizedFn } from "ahooks";

import BlurGlass from "@/components/BlurGlass";

import Styles from "./style.module.less";
import CommonStyles from "../../style.module.less";

const Calendar: FC<any> = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTriggle = useMemoizedFn(() => {
    if (containerRef.current) {
      containerRef.current.style.height = "800px";
    }
  });

  return (
    <BlurGlass
      className={cn(CommonStyles["blurGlass-item"], Styles.calendar)}
      ref={containerRef}
      onClick={handleTriggle}
    >
      打卡详情日历图区域
    </BlurGlass>
  );
};

export default Calendar;
