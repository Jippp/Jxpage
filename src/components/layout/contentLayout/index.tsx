import { FC } from "react";
import styled from "styled-components";

import { TOPHEADERHEIGHT, BOTTOMFOTTERHEIGHT } from "@/config/stylesConfig";

interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout: FC<ContentLayoutProps> = ({ children }) => {
  return <ContentLayoutStyle>{children}</ContentLayoutStyle>;
};

export default ContentLayout;

const ContentLayoutStyle = styled.div`
  width: 100%;
  min-height: calc(100% - ${TOPHEADERHEIGHT}px - ${BOTTOMFOTTERHEIGHT}px);
`;
