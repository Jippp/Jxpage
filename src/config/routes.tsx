import { RouteObject } from "react-router-dom";

import PageItem from "@/pages/commons/pageItem";

const routeConfigs: RouteObject[] = [
  {
    path: "/",
    element: <PageItem acComp={() => import("@/pages/home")} />,
  },
  {
    path: "/login",
    element: <PageItem acComp={() => import("@/pages/login")} />,
  },
  {
    path: "/clockIn",
    element: <PageItem acComp={() => import("@/pages/clockIn")} />,
  },
  {
    path: "/message",
    element: <PageItem acComp={() => import("@/pages/message")} />,
  },
  {
    path: "/time",
    element: <PageItem acComp={() => import("@/pages/time")} />,
  },
  {
    path: "*",
    element: <PageItem acComp={() => import("@/pages/commons/404")} />,
  },
];

export default routeConfigs;
