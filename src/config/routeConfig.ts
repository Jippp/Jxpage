/** 首页 */
export const HOME = "/";
/** 登录页 */
export const LOGIN = "/login";
/** blog页 */
export const BLOG = "/blog";
/** blog详情页 */
export const BLOGDETAILPATH = "/blog/detail";
export const BLOGDETAIL = `${BLOGDETAILPATH}/:blogId`;
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
    title: "Blog",
    path: BLOG,
  },
  {
    title: "打卡",
    path: CLOCKIN,
  },
  {
    title: "记录",
    path: TIME,
  },
  {
    title: "留言",
    path: MESSAGE,
  },
];
