import { FC } from "react";

import Header from "@/components/header";

import styled from "styled-components";

interface IndexProps {
  children: React.ReactNode;
}

const IndexPage: FC<IndexProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <div className="index-content">{children}</div>
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
