import { FC } from "react";
import { useMemoizedFn } from "ahooks";
import dayjs from "dayjs";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { FindBlogResponse } from "@/api/response";
import { BLOGDETAILPATH } from "@/config/routeConfig";
import useRoute from "@/hooks/useRoute";
import { BlogItemStyle } from "./styles";

const remarkPlugins = [gfm];

const ListItem: FC<FindBlogResponse> = (props) => {
  const { title, contentStr, tags, createtime, id } = props;

  const { push } = useRoute();

  const handleToDetail = useMemoizedFn((id: number) => {
    push(`${BLOGDETAILPATH}/${id}`);
  });

  return (
    <BlogItemStyle onClick={() => handleToDetail(id)}>
      <div className="item-description">
        <div className="item-description-time">
          {dayjs(createtime).format("YYYY.MM.DD")}
        </div>
        <div className="item-description-tag">
          {tags[0] ? tags[0].name : ""}
        </div>
      </div>
      <div className="item-content">
        <h2 className="text-base font-bold hover:decoration-solid hover:underline underline-offset-4">
          {title}
        </h2>
        <ReactMarkdown remarkPlugins={remarkPlugins}>
          {contentStr}
        </ReactMarkdown>
      </div>
      <div className="item-picture" />
    </BlogItemStyle>
  );
};

export default ListItem;
