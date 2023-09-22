import { RouteObject } from "react-router-dom";

import PageItem from "@/components/commons/pageItem";
import { LOGIN, CLOCKIN, MESSAGE, TIME } from "./routeConfig";

const pageRouteConfigs: RouteObject[] = [
  {
    path: LOGIN,
    element: <PageItem acComp={() => import("@/pages/login")} />,
  },
  {
    path: CLOCKIN,
    element: <PageItem acComp={() => import("@/pages/clockIn")} />,
  },
  {
    path: MESSAGE,
    element: <PageItem acComp={() => import("@/pages/message")} />,
  },
  {
    path: TIME,
    element: <PageItem acComp={() => import("@/pages/time")} />,
  },
];

export default pageRouteConfigs;
