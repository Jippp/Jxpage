import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import { LOGIN, CLOCKIN, MESSAGE, TIME } from "./routeConfig";

const LoginPage = lazy(() => import("@/pages/login"));
const ClockInPage = lazy(() => import("@/pages/clockIn"));
const MessagePage = lazy(() => import("@/pages/message"));
const TimePage = lazy(() => import("@/pages/time"));

const pageRouteConfigs: RouteObject[] = [
  {
    path: LOGIN,
    element: <LoginPage />,
  },
  {
    path: CLOCKIN,
    element: <ClockInPage />,
  },
  {
    path: MESSAGE,
    element: <MessagePage />,
  },
  {
    path: TIME,
    element: <TimePage />,
  },
];

export default pageRouteConfigs;
