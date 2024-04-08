import { useMemoizedFn } from "ahooks";
import Vditor from "vditor";

/** 最大尺寸 2m */
const CHUNKSIZE = 20 * 1024 * 1024;
const toolbar = [
  "emoji",
  "italic", // 斜体
  "strike", // 删除线
  "quote", // 引用
  "check", // 待办
  "table", // 表格
  "|",
  "code", // 代码块
  "upload", // 上传
  "link", // 链接
  "record", // 录音
  "edit-mode", // 编辑模式 实时、即时、分屏
  "|",
  "code-theme", // 代码主题
  "content-theme", // 内容主题
  "|",
  "preview", // 代码块预览
  "export", // 导出
  "fullscreen", // 全屏
];
const upload = {
  fieldName: "file",
  url: "/api/upload",
  max: CHUNKSIZE,
  format(_: File[], response: string) {
    const responseObj = JSON.parse(response);
    return JSON.stringify({
      msg: responseObj.msg,
      code: responseObj.code,
      data: {
        errFiles: [],
        succMap: responseObj.paths,
      },
    });
  },
  // TODO 压缩图片、原图很大时不想压缩就拆分开
  // file(files: File[]) {
  //   const newFiles: File[] = []
  //   files.forEach(file => {
  //     let start = 0
  //     while(start < file.size) {
  //       newFiles.push((file as any).slice(start, start + CHUNKSIZE))
  //       start += CHUNKSIZE
  //     }
  //   })
  //   console.log(newFiles)
  //   return files
  // }
};
const defaultOptions: IOptions = {
  height: 600,
  minHeight: 400,
  width: "100%",
  placeholder: "## 开始你的记录吧",
  counter: {
    // 启动计数器
    enable: true,
  },
  // 上传的相关配置
  upload,
};

export interface InitOptions extends IOptions {
  extraToolbar?: IOptions["toolbar"];
  onAfter?: (vditor: Vditor) => void;
}

const useInitRender = () => {
  const initVditor = useMemoizedFn((options: InitOptions) => {
    const vditor = new Vditor("vditor", {
      ...defaultOptions,
      ...options,
      toolbar: [...toolbar, ...(options.extraToolbar || [])],
      after: () => {
        if (options.onAfter) {
          options.onAfter(vditor);
        }
      },
    });
    return vditor;
  });

  return initVditor;
};

export default useInitRender;
