import { FC, useEffect, useRef } from "react";
import { useMemoizedFn } from "ahooks";
import { useImmer } from "use-immer";
import Vditor from "vditor";
import MdRender, { InitOptions } from "@/components/mdRender";
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
const DEFAULTBLOGTITLE = "Blog标题";

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
          icon: '<svg t="1711895737129" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1429" width="200" height="200"><path d="M906.666667 298.666667L725.333333 117.333333c-14.933333-14.933333-32-21.333333-53.333333-21.333333H170.666667C130.133333 96 96 130.133333 96 170.666667v682.666666c0 40.533333 34.133333 74.666667 74.666667 74.666667h682.666666c40.533333 0 74.666667-34.133333 74.666667-74.666667V349.866667c0-19.2-8.533333-38.4-21.333333-51.2zM652.8 864H371.2V648.533333h281.6v215.466667z m211.2-10.666667c0 6.4-4.266667 10.666667-10.666667 10.666667h-140.8V618.666667c0-17.066667-12.8-29.866667-29.866666-29.866667H341.333333c-17.066667 0-29.866667 12.8-29.866666 29.866667v245.333333H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667V170.666667c0-6.4 4.266667-10.666667 10.666667-10.666667h140.8V320c0 17.066667 12.8 29.866667 29.866666 29.866667h277.333334c17.066667 0 29.866667-12.8 29.866666-29.866667s-12.8-29.866667-29.866666-29.866667H371.2V160h302.933333c2.133333 0 6.4 2.133333 8.533334 2.133333l179.2 179.2c2.133333 2.133333 2.133333 4.266667 2.133333 8.533334V853.333333z" fill="#666666" p-id="1430"></path></svg>',
        },
        {
          name: "clear",
          tip: "清空",
          click: handleClearBlog,
          icon: '<svg t="1712408931386" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5082" width="200" height="200"><path d="M921.6 512 880.64 512 972.8 972.8C972.8 1001.088 949.888 1024 921.6 1024L102.4 1024C74.112 1024 51.2 1001.088 51.2 972.8L143.36 512 102.4 512C74.112 512 51.2 489.088 51.2 460.8L51.2 409.6C51.2 381.312 74.112 358.4 102.4 358.4L409.6 358.4 409.6 102.4C409.6 45.8496 455.4496 0 512 0 568.5504 0 614.4 45.8496 614.4 102.4L614.4 358.4 921.6 358.4C949.888 358.4 972.8 381.312 972.8 409.6L972.8 460.8C972.8 489.088 949.888 512 921.6 512ZM102.4 972.8 257.6384 972.8C254.1056 967.5008 252.4416 960.9472 253.6192 954.1888L284.7488 726.5024C287.2064 712.6016 300.4672 703.2832 314.3936 705.7408 328.32 708.1984 337.6128 721.4848 335.1808 735.4112L304.0512 963.072C303.4112 966.6816 302.0032 969.9328 300.1088 972.8L921.6 972.8 819.2 512 204.8 512 102.4 972.8ZM563.2 102.4C563.2 74.112 540.288 51.2 512 51.2 483.712 51.2 460.8 74.112 460.8 102.4L460.8 358.4 563.2 358.4 563.2 102.4ZM921.6 409.6 102.4 409.6 102.4 460.8 921.6 460.8 921.6 409.6Z" fill="#272636" p-id="5083"></path></svg>',
        },
      ];
    });
  }, [updateMdOptions, handleCreateBlog, handleClearBlog]);

  return (
    <>
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
      <MdRender renderProps={mdOptions} getVditor={getVditor} />
    </>
  );
};

export default CreatetBlog;
