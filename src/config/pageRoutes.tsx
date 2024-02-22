import { RouteObject } from "react-router-dom";

import delayLazy from "@/utils/delayLazy";

import { LOGIN, BLOG, CLOCKIN, MESSAGE, TIME } from "./routeConfig";

const LoginPage = delayLazy(() => import("@/pages/login"));
const BlogPage = delayLazy(() => import("@/pages/blog"));
const ClockInPage = delayLazy(() => import("@/pages/clockIn"));
const MessagePage = delayLazy(() => import("@/pages/message"));
const TimePage = delayLazy(() => import("@/pages/time"));

const pageRouteConfigs: RouteObject[] = [
  {
    path: LOGIN,
    element: <LoginPage />,
  },
  {
    path: BLOG,
    element: <BlogPage />,
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
