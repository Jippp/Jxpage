import { RouteObject } from "react-router-dom";

import delayLazy from "@/utils/delayLazy";

import pageRouteConfigs from "./pageRoutes";

const HomePage = delayLazy(() => import("@/pages/home"));
const ErrorPage = delayLazy(() => import("@/components/commons/404"));

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
