import { FC, useEffect, useRef } from "react";
import useInitRender, { InitOptions } from "./useInitRender";

import "vditor/dist/index.css";

export type { InitOptions } from "./useInitRender";

/* 
  blog相关功能：
    1. 预览，从服务端获取
    2. 在线编辑，支持保存、发布等功能
  所以应该有两个实例：
    一个是预览 内容是从服务器获取的，要考虑是否能编辑
    另一个是在线编辑 内容为空
*/

const MdRender: FC<InitOptions> = (mdRenderProps) => {
  const vditorRef = useRef<HTMLDivElement>(null);

  const initVditor = useInitRender();

  useEffect(() => {
    initVditor(mdRenderProps);
  }, [initVditor, mdRenderProps]);

  return <div id="vditor" className="vditor" ref={vditorRef} />;
};

export default MdRender;
