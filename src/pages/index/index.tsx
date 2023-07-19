import { FC } from "react";

import { pageTabs } from "@/config/routeConfig";
// import Header from '@/components/header'
// import Footer from '@/components/footer'
import { importUrl } from "@/utils/path";

import styled from "styled-components";

interface IndexProps {
  children: React.ReactNode;
}

const IndexPage: FC<IndexProps> = ({ children }) => {
  return (
    <Container>
      {/* <Header /> */}
      <div className="index-content">{children}</div>
      {pageTabs.map(({ path }, idx) => (
        <ContainerBgItem key={path} idx={idx}>
          <div className="test">test</div>
          <div className="parallax-item"></div>
          <div className="parallax-content">12333333</div>
        </ContainerBgItem>
      ))}
      {/* <Footer /> */}
    </Container>
  );
};

export default IndexPage;

const Container = styled.div`
  .index-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ContainerBgItem = styled.div<{ idx: number }>`
  position: relative;
  .test {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
  }
  .parallax-item {
    width: 100%;
    height: 85vh;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    background-image: url(${({ idx }) =>
      importUrl(`/src/assets/images/home_page_${idx}.png`)});
    background-attachment: fixed;
  }
  .parallax-content {
    height: 20vh;
    /* TODO 尝试添加毛玻璃 */
    background-color: rgb(139, 139, 131);
  }
`;
