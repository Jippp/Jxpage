import { importUrl } from "@/utils/path";

/** 首页 */
export const HOME = "/";
/** 登录页 */
export const LOGIN = "/login";
/** 打卡完成情况页 */
export const CLOCKIN = "/clockIn";
/** 留言页 */
export const MESSAGE = "/message";
/** 记录页 */
export const TIME = "/time";

interface PageTabItem {
  /** 名称 */
  title: string;
  /** 路由 */
  path: string;
  /** 背景图 */
  bgImg?: string;
}

export const pageTabs: PageTabItem[] = [
  {
    title: "首页",
    path: HOME,
  },
  {
    title: "打卡",
    path: CLOCKIN,
    bgImg: importUrl(`/src/assets/images/home_page_1.png`),
  },
  {
    title: "记录",
    path: TIME,
    bgImg: importUrl(`/src/assets/images/home_page_2.png`),
  },
  {
    title: "留言",
    path: MESSAGE,
    bgImg: importUrl(`/src/assets/images/home_page_3.png`),
  },
];
