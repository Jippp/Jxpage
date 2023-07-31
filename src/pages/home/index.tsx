import { FC } from "react";

import styled, { css } from "styled-components";

import { pageTabs } from "@/config/routeConfig";
import SimpleSlider from "@/components/Slider";
// import usePageTo from '@/hooks/usePageTo'
import { importUrl } from "@/utils/path";

const Home: FC = () => {
  return (
    <>
      <SimpleSlider
        width="100vw"
        dotPosition="right"
        dots={{
          className: "simple-slider-dots",
        }}
      >
        {pageTabs.map(({ path }, idx) => (
          <ContainerBgItem key={path} idx={idx} />
        ))}
      </SimpleSlider>
      {/* 页面导航，鼠标上下滑动有动效，hover不同的tab和背景联动
          点击tab之后进入不同的页面，页面背景就是之前的背景
      */}
    </>
  );
};

export default Home;

const ContainerBgItem = styled.div<{ idx: number }>`
  width: 100%;
  height: 500px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  ${({ idx }) => css`
    background-image: url(${importUrl(
      `/src/assets/images/home_page_${idx}.png`,
    )});
  `}
`;
