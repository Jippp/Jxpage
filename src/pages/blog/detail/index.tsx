import { FC, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown, { Components } from "react-markdown";
import gfm from "remark-gfm";
import dayjs from "dayjs";
import styled from "styled-components";
import { FindBlogResponse } from "@/api/response";
import StatusBoundary from "@/components/statusBoundary";
import { useFind } from "@/pages/blog/hooks/useHook";
import { BlogContainer } from "@/pages/blog/styles";
import CodeBlock from "./codeBlock";

const remarkPlugins = [gfm];
const handleComponentRender: Components = {
  code({ className, children }) {
    const match = /language-(\w+)/.exec(className || "");
    return match ? (
      <CodeBlock language={match[1]}>{children}</CodeBlock>
    ) : (
      <CommonCodeBlock className={className}>{children}</CommonCodeBlock>
    );
  },
};

const BlogDetail: FC = () => {
  const params = useParams();

  const { run: findBlog, data: blogRes, loading, error } = useFind();

  useEffect(() => {
    if (params && params.blogId) {
      findBlog({ id: Number(params.blogId) });
    }
  }, [params, findBlog]);

  const blogItem: FindBlogResponse = useMemo(
    () => (Array.isArray(blogRes) && blogRes.length ? blogRes[0] : {}),
    [blogRes],
  );

  const htmlContent = useMemo(() => {
    return blogItem.content || "";
  }, [blogItem]);

  return (
    <StatusBoundary hasSuspence={false} loading={loading} error={error}>
      <BlogContainer>
        <h2 className="text-2xl font-bold mb-4">{blogItem.title || ""}</h2>
        <div className="flex flex-row mb-2 text-xs text-slate-400">
          <p className="mr-1">
            In {dayjs(blogItem.createtime).format("YYYY-MM-DD")}.
          </p>
          <p>By {blogItem.user?.name || "-"}</p>
        </div>
        <ReactMarkdown
          className="prose"
          remarkPlugins={remarkPlugins}
          components={handleComponentRender}
        >
          {htmlContent}
        </ReactMarkdown>
      </BlogContainer>
    </StatusBoundary>
  );
};

export default BlogDetail;

const CommonCodeBlock = styled.code`
  &::before,
  &::after {
    display: none;
  }
  padding: 1px 3px;
  background-color: rgba(27, 31, 35, 0.05);
`;
