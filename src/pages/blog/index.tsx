import { FC, useState } from "react";
import { useMemoizedFn, useRequest } from "ahooks";

import { findAllBlog } from "@/api/blog";
import { FindBlogResponse } from "@/api/response";
import BlogItem from "@/components/blogItem";
import StatusBoundary from "@/components/statusBoundary";
import useRoute from "@/hooks/useRoute";
import { EDITBLOG } from "@/config/routeConfig";

import { BlogContainer, BlogHeader } from "./styles";

const defaultBlog: FindBlogResponse[] = [];

const BlobList: FC = () => {
  const [blogList, setBlogList] = useState(defaultBlog);

  useRequest(findAllBlog, {
    manual: false,
    onSuccess(res) {
      if (Array.isArray(res) && res.length) {
        setBlogList(res);
      }
    },
    onError() {
      setBlogList(defaultBlog);
    },
  });

  return (
    <>
      {blogList.map((item) => (
        <BlogItem {...item} key={item.id} />
      ))}
    </>
  );
};

const BlogPage: FC = () => {
  const { push } = useRoute();

  const handleToCreate = useMemoizedFn(() => {
    push(EDITBLOG);
  });
  return (
    <BlogContainer>
      <BlogHeader onClick={handleToCreate}>Blog</BlogHeader>
      <StatusBoundary>
        <BlobList />
      </StatusBoundary>
    </BlogContainer>
  );
};

export default BlogPage;
