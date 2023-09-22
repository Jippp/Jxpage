import { FC } from "react";
import { useLocation } from "react-router-dom";
import cn from "classnames";

import { pageTabs } from "@/config/routeConfig";
import usePageTo from "@/hooks/usePageTo";

import Styles from "./style.module.less";

const Header: FC<any> = () => {
  const { pathname } = useLocation();
  const pageTo = usePageTo();

  return (
    <div className={Styles["header-container"]}>
      <div className={Styles["header-content"]}>
        {pageTabs.map(({ title, path }) => (
          <span
            className={cn(Styles["header-item"], {
              [Styles["header-item-active"]]: pathname === path,
            })}
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
