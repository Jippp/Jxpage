import { RouteObject } from "react-router-dom";

import PageItem from "@/components/commons/pageItem";
import { LOGIN, CLOCKIN, MESSAGE, TIME } from "./routeConfig";

const pageRouteConfigs: RouteObject[] = [
  {
    path: LOGIN,
    element: <PageItem acComp={() => import("@/pages/login")} />,
    // element: <LoginPage />,
  },
  {
    path: CLOCKIN,
    element: <PageItem acComp={() => import("@/pages/clockIn")} />,
    // element: <ClockInPage />,
  },
  {
    path: MESSAGE,
    element: <PageItem acComp={() => import("@/pages/message")} />,
    // element: <MessagePage />,
  },
  {
    path: TIME,
    element: <PageItem acComp={() => import("@/pages/time")} />,
    // element: <TimePage />,
  },
];

export default pageRouteConfigs;
