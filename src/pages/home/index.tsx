import { FC } from "react";
import styled, { css } from "styled-components";

import { pageTabs, HOME } from "@/config/routeConfig";
import SimpleSlider from "@/components/Slider";
import BlurGlass from "@/components/BlurGlass";
import usePageTo from "@/hooks/usePageTo";

// 去掉首页
const showTabs = pageTabs.filter((tab) => tab.path !== HOME);

const Home: FC = () => {
  const handlePageTo = usePageTo();

  return (
    <SimpleSlider height="calc(100vh - 20px)">
      {/* 
        页面导航，鼠标上下滑动有动效，hover不同的tab和背景联动
        点击tab之后进入不同的页面，页面背景就是之前的背景
      */}
      {showTabs.map(({ title, path, bgImg }) => (
        <ContainerBgItem key={path} bg={bgImg!} className="blurBg">
          <div className="content" onClick={() => handlePageTo(path)}>
            <BlurGlass className="content-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              sapiente nesciunt et vero modi ipsa illo a, asperiores,
              exercitationem optio consequatur tenetur nostrum aliquam dicta sit
              repellat ullam impedit quo.
            </BlurGlass>
            <div className="content-title">{title}</div>
          </div>
        </ContainerBgItem>
      ))}
    </SimpleSlider>
  );
};

export default Home;

const ContainerBgItem = styled.div<{ bg: string }>`
  position: relative;
  width: 100%;
  height: 100vh;
  ${({ bg }) => css`
    background-image: url(${bg});
  `}
  .content {
    cursor: pointer;
    position: absolute;
    left: 16px;
    bottom: 40%;
    width: 100%;
    display: flex;
    align-items: center;
    z-index: 1;
    .content-desc {
      width: 60%;
      height: 40vh;
      border-radius: 8px;
      transition: all 0.5s;
      &:hover {
        transform: translate(2px, 2px);
        box-shadow: 8px 8px 10px 8px rgba(0, 0, 0, 0.5);
      }
      &::after {
        border-radius: 8px;
      }
    }
    .content-title {
      margin-left: 20px;
      font-size: 3rem;
      text-shadow: 10px 10px 10px rgba(255, 255, 255, 0.8);
    }
  }
`;
