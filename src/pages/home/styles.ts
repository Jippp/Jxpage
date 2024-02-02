import styled from "styled-components";

import { FONTCOLOR } from "@/config/stylesConfig";
import ContentPicture from "@/assets/images/content-picture.jpg";

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
    padding: 40px 0 40px 40px;
    border-radius: 10px 0 0 10px;
    background-color: #f6f6f6;
  }
  .content-right-picture {
    flex: 0 1 50%;
    height: 100%;
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

/** 单个列表的样式 */
export const HomeListItemStyle = styled.div`
  width: 100%;
  height: 130px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  .item-description {
    width: 16%;
    margin-right: 6%;
    color: #646f82;
    .item-description-time {
      font-size: 16px;
    }
    .item-description-tag {
      margin-top: 8px;
      font-size: 12px;
    }
  }
  .item-content {
    margin-right: 4%;
    width: 54%;
    h4 {
      margin: 0;
    }
    p {
      margin-top: 8px;
    }
  }
  .item-picture {
    width: 20%;
    height: calc(100% - 40px);
    background: url(${ContentPicture}) no-repeat center / cover;
  }
`;