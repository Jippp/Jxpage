import { FC, useMemo } from "react";
import { useLocation } from "react-router-dom";
import cn from "classnames";

import { pageTabs } from "@/config/routeConfig";
import usePageTo from "@/hooks/usePageTo";

import { HeaderStyle, HeaderItemStyle } from "./styles";

const Header: FC<any> = () => {
  const { pathname } = useLocation();
  const pageTo = usePageTo();

  const homeTabItem = useMemo(() => {
    const { title, path } = pageTabs[0];
    return (
      <div className="header-item-home-container">
        <HeaderItemStyle
          className="header-item-home"
          key={path}
          onClick={() => pageTo(path)}
        >
          {title}
        </HeaderItemStyle>
      </div>
    );
  }, [pageTo]);

  return (
    <HeaderStyle>
      {/* 首页 */}
      {homeTabItem}
      {/* 其他 */}
      <div className="header-item-other-container">
        {pageTabs.slice(1).map(({ title, path }) => (
          <HeaderItemStyle
            className={cn({ "header-item-active": pathname === path })}
            key={path}
            onClick={() => pageTo(path)}
          >
            {title}
          </HeaderItemStyle>
        ))}
      </div>
    </HeaderStyle>
  );
};

export default Header;
