import { FC } from "react";
import styled from "styled-components";

import LoadingPage from "@/components/commons/loading";
import Header from "@/components/header";
import Footer from "@/components/footer";
import useLogin from "@/hooks/useLogin";

interface IndexProps {
  children: React.ReactNode;
}

const IndexPage: FC<IndexProps> = ({ children }) => {
  const { loading: loginLoading } = useLogin();

  if (loginLoading) return <LoadingPage />;

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
