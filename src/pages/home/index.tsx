import { FC } from "react";

// import BlogItem from "@/components/blogItem";
import { HomeStyle, HomeContentStyle, HomeListStyle } from "./styles";

// import { pageTabs, HOME } from "@/config/routeConfig";
// 去掉首页
// const showTabs = pageTabs.filter((tab) => tab.path !== HOME);

const Home: FC = () => {
  return (
    <HomeStyle>
      <HomeContentStyle>
        <div className="content-left-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          ipsum recusandae nisi minima cum? Voluptas labore eveniet libero,
          facere voluptate corrupti necessitatibus! Dignissimos illo culpa
          soluta totam. Deserunt, odit quis.
        </div>
        <div className="content-right-picture" />
      </HomeContentStyle>
      <HomeListStyle>
        <div className="list-top">
          <h4>历史文章</h4>
        </div>
        <div className="list-container">{/* <BlogItem /> */}</div>
      </HomeListStyle>
    </HomeStyle>
  );
};

export default Home;
