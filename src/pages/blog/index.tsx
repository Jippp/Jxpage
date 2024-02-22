import { FC } from "react";

import BlogItem from "@/components/blogItem";
import { BlogContainer, BlogHeader } from "./styles";

const BlogPage: FC = () => {
  return (
    <BlogContainer>
      <BlogHeader>Blog</BlogHeader>
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </BlogContainer>
  );
};

export default BlogPage;
