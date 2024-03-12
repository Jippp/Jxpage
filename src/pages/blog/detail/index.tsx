import { FC } from "react";
import { useParams } from "react-router-dom";

const BlogDetail: FC<any> = () => {
  const params = useParams();
  console.log(params);
  return <>blog 详情页</>;
};

export default BlogDetail;
