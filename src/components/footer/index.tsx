import { FC } from "react";

import styled from "styled-components";

import { BOTTOMFOTTERHEIGHT, FONTCOLOR } from "@/config/stylesConfig";

const Footer: FC<any> = () => {
  return (
    <FootStyle>
      © {new Date().getFullYear()} · Jxppp ·{" "}
      <a href="https://beian.miit.gov.cn/" target="_blank">
        皖ICP备2024035024号
      </a>
    </FootStyle>
  );
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
  a {
    margin-left: 4px;
    text-decoration: none;
    color: ${FONTCOLOR};
  }
`;
