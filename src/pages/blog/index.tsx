import { FC, useEffect } from "react";

import Vditor from "vditor";
import "vditor/dist/index.css";

import BlogItem from "@/components/blogItem";
import { BlogContainer, BlogHeader } from "./styles";

/* 
  blog相关功能：
    1. 预览，从服务端获取
    2. 在线编辑，支持保存、发布等功能
*/

const BlogPage: FC = () => {
  // const [vd, setVd] = useState<Vditor>()

  useEffect(() => {
    const vditor = new Vditor("vditor", {
      height: 300,
      width: "100%",
      // after() {
      //   setVd(vditor)
      // }
    });
    return () => {
      vditor.destroy();
      // setVd(undefined);
    };
  }, []);

  return (
    <BlogContainer>
      <BlogHeader>Blog</BlogHeader>
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />

      <div id="vditor" className="vditor" />
    </BlogContainer>
  );
};

export default BlogPage;
