import { FC } from "react";

import { pageTabs } from "@/config/routeConfig";
import usePageTo from "@/hooks/usePageTo";

import Styles from "./style.module.less";

const Header: FC<any> = () => {
  const pageTo = usePageTo();

  return (
    <div className={Styles["header-container"]}>
      <div className={Styles["header-container-content"]}>
        {pageTabs.map(({ title, path }) => (
          <span
            className={Styles["header-container-content-item"]}
            key={path}
            onClick={() => pageTo(path)}
          >
            {title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Header;
