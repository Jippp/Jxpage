import { FC, useEffect, useRef } from "react";
import { useMemoizedFn } from "ahooks";
import { useImmer } from "use-immer";
import Vditor from "vditor";
import MdRender, { InitOptions } from "@/components/mdRender";
import SaveSvg from "@/assets/images/save.svg?raw";
import ClearSvg from "@/assets/images/clear.svg?raw";
import { useCreate } from "../hooks/useHook";

const getStringFromMarkdown: (markdownJson: Record<string, any>[]) => string = (
  markdownJson,
) => {
  return markdownJson
    .map((item) => {
      if (item.Children && item.Children.length) {
        return getStringFromMarkdown(item.Children);
      } else {
        if (item.Type === "NodeText") {
          return item.Data as string;
        }
      }
    })
    .join(" ");
};
const DEFAULTBLOGTITLE = "输入标题...";

const CreatetBlog: FC = () => {
  const [mdOptions, updateMdOptions] = useImmer<InitOptions>({});
  const vditorRef = useRef<Vditor>();
  const blogTitleRef = useRef<HTMLInputElement>(null);

  const { run: createBlog } = useCreate();

  const getVditor = useMemoizedFn((vditor: Vditor) => {
    vditorRef.current = vditor;
  });

  const handleClearBlog = useMemoizedFn(() => {
    if (vditorRef.current) {
      vditorRef.current.setValue("");
      vditorRef.current.clearCache();
      vditorRef.current.clearStack();
    }
  });
  /** 保存 */
  const handleCreateBlog = useMemoizedFn(() => {
    if (vditorRef.current) {
      const mkStr = vditorRef.current.getValue();
      const mkJson = JSON.parse(vditorRef.current.exportJSON(mkStr));
      createBlog({
        userName: "一二一",
        title: blogTitleRef.current!.value,
        content: vditorRef.current.getValue(),
        contentStr: getStringFromMarkdown(mkJson.Children),
        // TODO
        // 标签：写死的一些标签，然后保存时出弹窗提示。
        // 弹窗有：标签，内容摘要。封面。总之就是抄掘金的 hhhhh
      });
      // 保存之后清除掉缓存
      vditorRef.current.clearCache();
    }
  });

  useEffect(() => {
    updateMdOptions((d) => {
      // d.onAfter = (vditor) => {
      //   // TODO 内容应该是从服务器动态获取的
      //   vditor.setValue("## test二123级标题");
      // };
      d.extraToolbar = [
        "|",
        {
          name: "save",
          tip: "保存",
          click: handleCreateBlog,
          icon: SaveSvg,
        },
        {
          name: "clear",
          tip: "清空",
          click: handleClearBlog,
          icon: ClearSvg,
        },
      ];
    });
  }, [updateMdOptions, handleCreateBlog, handleClearBlog]);

  return (
    <>
      <div className="flex flex-row">
        <label
          htmlFor={DEFAULTBLOGTITLE}
          className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-2"
        >
          <span className="text-xs font-medium text-gray-700">
            {DEFAULTBLOGTITLE}
          </span>

          <input
            type="email"
            id={DEFAULTBLOGTITLE}
            placeholder={DEFAULTBLOGTITLE}
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            ref={blogTitleRef}
          />
        </label>
        <div
          className="
          inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500
        "
        >
          保存
        </div>
      </div>

      <MdRender renderProps={mdOptions} getVditor={getVditor} />
    </>
  );
};

export default CreatetBlog;
