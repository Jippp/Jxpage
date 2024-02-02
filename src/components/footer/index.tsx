import { FC } from "react";

import styled from "styled-components";

import { BOTTOMFOTTERHEIGHT } from "@/config/stylesConfig";

const Footer: FC<any> = () => {
  return <FootStyle>CopyRight © 2023 J-ppp</FootStyle>;
};

export default Footer;

const FootStyle = styled.div`
  width: 100%;
  height: ${BOTTOMFOTTERHEIGHT}px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: ${BOTTOMFOTTERHEIGHT}px;
  font-size: 12px;
`;
