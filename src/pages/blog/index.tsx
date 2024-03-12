import { FC, useEffect } from "react";
import { useImmer } from "use-immer";
import { useMemoizedFn } from "ahooks";

import BlogItem from "@/components/blogItem";
import MdRender, { InitOptions } from "@/components/mdRender";
import useRoute from "@/hooks/useRoute";
import { BLOGDETAILPATH } from "@/config/routeConfig";
import { BlogContainer, BlogHeader } from "./styles";

const BlogPage: FC = () => {
  const [mdOptions, updateMdOptions] = useImmer<InitOptions>({});

  const { push } = useRoute();

  const handleToDetail = useMemoizedFn(() => {
    push(`${BLOGDETAILPATH}/123`);
  });

  useEffect(() => {
    updateMdOptions((d) => {
      d.onAfter = (vditor) => {
        // TODO 内容应该是从服务器动态获取的
        vditor.setValue("## test二123级标题");
      };
      // TODO 添加保存到服务器的toolbar
      d.extraToolbar = [];
    });
  }, [updateMdOptions]);

  return (
    <BlogContainer>
      <BlogHeader>Blog</BlogHeader>
      <BlogItem onClick={handleToDetail} />

      <MdRender {...mdOptions} />
    </BlogContainer>
  );
};

export default BlogPage;
