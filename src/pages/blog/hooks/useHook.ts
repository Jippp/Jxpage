import { useRequest } from "ahooks";
import { createBlog, updateBlog, findByBlog, deleteBlog } from "@/api/blog";
import { FindBlogResponse } from "@/api/response";
import { Options } from "ahooks/lib/useRequest/src/types";

export const useCreate = () => {
  return useRequest(createBlog, {
    manual: true,
    onSuccess(res) {
      console.log("%csuccess", "color: red; font-size: 20px;", res);
    },
    onError(error) {
      console.log("%cerror", "color: red; font-size: 20px;", error);
    },
  });
};
export const useFind = (
  options?: Options<FindBlogResponse, Record<string, any>[]>,
) => {
  return useRequest(findByBlog, {
    manual: true,
    ...options,
  });
};
export const useUpdate = () => {
  return useRequest(updateBlog, {
    manual: true,
    onSuccess(res) {
      console.log("%csuccess", "color: red; font-size: 20px;", res);
    },
    onError(error) {
      console.log("%cerror", "color: red; font-size: 20px;", error);
    },
  });
};
export const useDelete = () => {
  return useRequest(deleteBlog, {
    manual: true,
    onSuccess(res) {
      console.log("%csuccess", "color: red; font-size: 20px;", res);
    },
    onError(error) {
      console.log("%cerror", "color: red; font-size: 20px;", error);
    },
  });
};
