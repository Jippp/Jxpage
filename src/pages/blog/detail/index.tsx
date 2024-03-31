import { FC, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown, { Components } from "react-markdown";
import gfm from "remark-gfm";
import { useFind } from "@/pages/blog/hooks/useHook";
import { BlogContainer } from "@/pages/blog/styles";
import CodeBlock from "./codeBlock";

const remarkPlugins = [gfm];
const handleComponentRender: Components = {
  code({ className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return match ? (
      <CodeBlock language={match[1]}>{children}</CodeBlock>
    ) : (
      <code {...props} className={className}>
        {children}
      </code>
    );
  },
};

const BlogDetail: FC = () => {
  const params = useParams();

  const { run: findBlog, data: blogItem } = useFind();

  useEffect(() => {
    if (params && params.blogId) {
      findBlog({ id: params.blogId });
    }
  }, [params, findBlog]);

  const htmlContent = useMemo(() => {
    return Array.isArray(blogItem) && blogItem.length
      ? blogItem[0].content
      : "";
  }, [blogItem]);

  return (
    <BlogContainer>
      <ReactMarkdown
        remarkPlugins={remarkPlugins}
        components={handleComponentRender}
      >
        {htmlContent}
      </ReactMarkdown>
    </BlogContainer>
  );
};

export default BlogDetail;
