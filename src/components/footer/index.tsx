import { FC } from "react";

import Styles from "./style.module.less";

const Footer: FC<any> = () => {
  return <div className={Styles["foot-container"]}>底部版权说明部分</div>;
};

export default Footer;
