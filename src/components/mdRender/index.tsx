import { FC, useEffect, useRef, memo } from "react";
import Vditor from "vditor";
import useInitRender, { InitOptions } from "./useInitRender";

import "vditor/dist/index.css";

export type { InitOptions } from "./useInitRender";

export interface MdRenderProps {
  renderProps: InitOptions;
  getVditor: (vditor: Vditor) => void;
}

/* 
  blog相关功能：
    1. 预览，从服务端获取
    2. 在线编辑，支持保存、发布等功能
  所以应该有两个实例：
    一个是预览 内容是从服务器获取的，要考虑是否能编辑
    另一个是在线编辑 内容为空
*/

const MdRender: FC<MdRenderProps> = ({ renderProps, getVditor }) => {
  const vditorRef = useRef<HTMLDivElement>(null);

  const initVditor = useInitRender();

  useEffect(() => {
    if (renderProps && Object.keys(renderProps).length) {
      getVditor(initVditor(renderProps));
    }
  }, [initVditor, renderProps, getVditor]);

  return <div id="vditor" className="vditor" ref={vditorRef} />;
};

export default memo(MdRender);
