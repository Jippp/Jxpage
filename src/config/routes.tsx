import { RouteObject } from "react-router-dom";

import PageItem from "@/pages/commons/pageItem";
import pageRouteConfigs from "./pageRoutes";

const routeConfigs: RouteObject[] = [
  {
    path: "/",
    element: <PageItem acComp={() => import("@/pages/home")} />,
  },
  ...pageRouteConfigs,
  {
    path: "*",
    element: <PageItem acComp={() => import("@/pages/commons/404")} />,
  },
];

export default routeConfigs;
