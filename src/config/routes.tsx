import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import pageRouteConfigs from "./pageRoutes";

const HomePage = lazy(() => import("@/pages/home"));
const ErrorPage = lazy(() => import("@/components/commons/404"));

const routeConfigs: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  ...pageRouteConfigs,
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default routeConfigs;
