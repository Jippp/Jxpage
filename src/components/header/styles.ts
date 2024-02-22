import styled from "styled-components";

import { TOPHEADERHEIGHT, TOPHEADERBGGCOLOR } from "@/config/stylesConfig";

export const HeaderStyle = styled.div`
  position: relative;
  width: 100%;
  height: ${TOPHEADERHEIGHT}px;
  background-color: ${TOPHEADERBGGCOLOR};
  backdrop-filter: blur(6px);
  /* z-index: 9; */
  font-size: 18px;
  display: flex;
  align-items: center;
  .header-item-home-container {
    .header-item-home {
      font-weight: 500;
      font-size: 24px;
    }
  }
  .header-item-other-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 2 0 auto;
  }
`;

export const HeaderItemStyle = styled.div`
  margin-right: 20px;
  cursor: pointer;
  &:last-of-type {
    margin-right: 0;
  }
  &:not(.header-item-home):hover,
  &.header-item-active {
    color: #000;
    text-decoration: underline;
    text-underline-offset: 6px;
  }
  &.header-item-active {
    font-weight: 500;
  }
`;
