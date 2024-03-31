import { get, post } from "./";
import { FindBlogResponse } from "./response";

export const createBlog = (data: Record<string, any>) => {
  return post("/blog/create", {
    body: JSON.stringify(data),
  });
};

export const findAllBlog = () => {
  return get("/blog/findAll") as Promise<FindBlogResponse>;
};
export const findByBlog = (data: Record<string, any>) => {
  return post("/blog/find", {
    body: JSON.stringify(data),
  });
};
export const updateBlog = (data: Record<string, any>) => {
  return post("/blog/upload", {
    body: JSON.stringify(data),
  });
};
export const deleteBlog = (data: Record<string, any>) => {
  return post("/blog/delete", {
    body: JSON.stringify(data),
  });
};
