import styled from "styled-components";

import ContentPicture from "@/assets/images/content-picture.jpg";

export const BlogItemStyle = styled.div`
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