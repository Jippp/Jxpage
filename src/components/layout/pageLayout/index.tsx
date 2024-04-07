import { FC } from "react";
import styled from "styled-components";

// import LoadingPage from "@/components/commons/loading";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContentLayout from "@/components/layout/contentLayout";
import { FONTCOLOR } from "@/config/stylesConfig";
// import useLogin from "@/hooks/useLogin";

interface IndexProps {
  children: React.ReactNode;
}

const PageLayout: FC<IndexProps> = ({ children }) => {
  // const { loading: loginLoading } = useLogin();

  // if (loginLoading) return <LoadingPage />;

  return (
    <Layout>
      <Header />
      <ContentLayout>{children}</ContentLayout>
      <Footer />
    </Layout>
  );
};

export default PageLayout;

const Layout = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  color: ${FONTCOLOR};
  /* .index-content {
    width: 100%;
    min-height: calc(100% - 20px);
  } */
`;
