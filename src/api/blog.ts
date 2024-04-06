import { get, post } from "./";
import { FindBlogResponse } from "./response";
import { BlogBase, FindBlogProps } from "./types";

export const createBlog = (data: Partial<BlogBase>) => {
  return post("/blog/create", {
    body: JSON.stringify(data),
  });
};

export const findAllBlog = () => {
  return get("/blog/findAll") as Promise<FindBlogResponse>;
};
export const findByBlog = (data: FindBlogProps) => {
  return post("/blog/find", {
    body: JSON.stringify(data),
  }) as Promise<FindBlogResponse>;
};
export const updateBlog = (data: Partial<BlogBase>) => {
  return post("/blog/upload", {
    body: JSON.stringify(data),
  });
};
export const deleteBlog = (data: FindBlogProps) => {
  return post("/blog/delete", {
    body: JSON.stringify(data),
  });
};
