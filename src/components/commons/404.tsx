import { FC } from "react";

const NoPage: FC = () => {
  console.log("%c404page", "color: red; font-size: 20px;");
  return <>404啦，没有找到页面哦</>;
};

export default NoPage;
