import { FC, useState } from "react";
import { useRequest } from "ahooks";
import { findByBlog } from "@/api/blog";
import { FindBlogResponse } from "@/api/response";
import BlogItem from "@/components/blogItem";
import { HomeStyle, HomeContentStyle, HomeListStyle } from "./styles";

const defaultBlog: FindBlogResponse[] = [];

const Home: FC = () => {
  const [blogList, setBlogList] = useState(defaultBlog);

  useRequest(findByBlog, {
    manual: false,
    defaultParams: [
      {
        skip: 0,
        pageSize: 3,
      },
    ],
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
    <HomeStyle>
      <HomeContentStyle>
        <div className="content-left-description">
          <h1>Here is my blog, welcome!</h1>
          <p>I am a front-end engineer still on the way to study.</p>
          <p>
            You can find me by email: 2554937602@qq.com or wechat: Ji-Xyaya.
          </p>
        </div>
        <div className="content-right-picture" />
      </HomeContentStyle>
      <HomeListStyle>
        <div className="list-top">
          <h4>历史文章</h4>
        </div>
        <div className="list-container">
          {blogList.map((item) => (
            <BlogItem {...item} key={item.id} />
          ))}
        </div>
      </HomeListStyle>
    </HomeStyle>
  );
};

export default Home;
