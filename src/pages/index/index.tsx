import { FC } from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";

import styled from "styled-components";

interface IndexProps {
  children: React.ReactNode;
}

const IndexPage: FC<IndexProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <div className="index-content">{children}</div>
      <Footer />
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
    width: 100%;
    min-height: 100%;
  }
`;
