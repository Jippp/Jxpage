import styled from "styled-components";

import { FONTCOLOR } from "@/config/stylesConfig";
import ContentPicture from "@/assets/images/bg.png";

/** 整体样式 */
export const HomeStyle = styled.div`
  margin-top: 28px;
`;

/** 中间区域的样式 */
export const HomeContentStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 750px;
  .content-left-description {
    flex: 0 1 calc(50% - 40px);
    height: calc(100% - 80px);
    padding: 40px 10px 40px 40px;
    border-radius: 10px 0 0 10px;
    background-color: #f6f6f6;
  }
  .content-right-picture {
    flex: 0 1 50%;
    height: calc(100% - 80px);
    border-radius: 0 10px 10px 0;
    background: url(${ContentPicture}) no-repeat 0 0 / cover;
  }
`;

/** 下方列表的样式 */
export const HomeListStyle = styled.div`
  width: 80%;
  margin: 0 auto;
  .list-top {
    position: relative;
    &::after {
      position: absolute;
      width: 80%;
      height: 2px;
      content: "";
      left: 22%;
      top: 50%;
      background-color: ${FONTCOLOR};
    }
  }
  .list-container {
  }
`;
