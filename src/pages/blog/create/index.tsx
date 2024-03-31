import { FC, useEffect, useRef } from "react";
import { useMemoizedFn } from "ahooks";
import { useImmer } from "use-immer";
import Vditor from "vditor";
import MdRender, { InitOptions } from "@/components/mdRender";
import { useCreate } from "../hooks/useHook";

const CreatetBlog: FC = () => {
  const [mdOptions, updateMdOptions] = useImmer<InitOptions>({});
  const vditorRef = useRef<Vditor>();

  const { run: createBlog } = useCreate();

  const getVditor = useMemoizedFn((vditor: Vditor) => {
    vditorRef.current = vditor;
  });

  /** 保存 */
  const handleCreateBlog = useMemoizedFn(() => {
    if (vditorRef.current) {
      createBlog({
        userName: "一二一",
        title: "",
        content: vditorRef.current.getValue(),
      });
    }
  });

  useEffect(() => {
    updateMdOptions((d) => {
      // d.onAfter = (vditor) => {
      //   // TODO 内容应该是从服务器动态获取的
      //   vditor.setValue("## test二123级标题");
      // };
      // TODO 添加保存到服务器的toolbar
      d.extraToolbar = [
        "|",
        {
          name: "save",
          tip: "保存",
          click: handleCreateBlog,
          icon: '<svg t="1711895737129" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1429" width="200" height="200"><path d="M906.666667 298.666667L725.333333 117.333333c-14.933333-14.933333-32-21.333333-53.333333-21.333333H170.666667C130.133333 96 96 130.133333 96 170.666667v682.666666c0 40.533333 34.133333 74.666667 74.666667 74.666667h682.666666c40.533333 0 74.666667-34.133333 74.666667-74.666667V349.866667c0-19.2-8.533333-38.4-21.333333-51.2zM652.8 864H371.2V648.533333h281.6v215.466667z m211.2-10.666667c0 6.4-4.266667 10.666667-10.666667 10.666667h-140.8V618.666667c0-17.066667-12.8-29.866667-29.866666-29.866667H341.333333c-17.066667 0-29.866667 12.8-29.866666 29.866667v245.333333H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667V170.666667c0-6.4 4.266667-10.666667 10.666667-10.666667h140.8V320c0 17.066667 12.8 29.866667 29.866666 29.866667h277.333334c17.066667 0 29.866667-12.8 29.866666-29.866667s-12.8-29.866667-29.866666-29.866667H371.2V160h302.933333c2.133333 0 6.4 2.133333 8.533334 2.133333l179.2 179.2c2.133333 2.133333 2.133333 4.266667 2.133333 8.533334V853.333333z" fill="#666666" p-id="1430"></path></svg>',
        },
      ];
    });
  }, [updateMdOptions, handleCreateBlog]);

  return <MdRender renderProps={mdOptions} getVditor={getVditor} />;
};

export default CreatetBlog;
