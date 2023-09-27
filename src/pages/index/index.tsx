import { FC } from "react";
import styled from "styled-components";

import Header from "@/components/header";
import Footer from "@/components/footer";

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
    width: 100%;
    min-height: calc(100% - 20px);
  }
`;
