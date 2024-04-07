import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useRequest } from "ahooks";
import { findByBlog } from "@/api/blog";
import { FindBlogResponse } from "@/api/response";
import { BLOG } from "@/config/routeConfig";
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
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Here is my blog, welcome!
          </h1>
          <p className="mt-1.5 text-base">
            I am a front-end engineer still on the way to study.
          </p>
          <div className="mt-1.5 text-base flex flex-row flex-wrap">
            <span>You can find me by email: </span>
            <a
              className="underline decoration-solid decoration-sky-500 underline-offset-4 mx-1"
              href="mailto: 2554937602@qq.com"
            >
              2554937602@qq.com
            </a>
            <span>or wechat: Ji-Xyaya.</span>
          </div>
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
        <Link
          className="w-1/3 my-4 mx-auto group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
          to={BLOG}
        >
          <span className="font-medium transition-colors group-hover:text-white">
            {" "}
            查看更多{" "}
          </span>
          <span className="shrink-0 rounded-full border border-indigo-600 bg-white p-2 group-active:border-indigo-500">
            <svg
              className="size-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </Link>
      </HomeListStyle>
    </HomeStyle>
  );
};

export default Home;
