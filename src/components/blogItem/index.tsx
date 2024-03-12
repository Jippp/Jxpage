import { FC } from "react";

import { BlogItemStyle } from "./styles";

interface ListItemProps {
  time?: string;
  tag?: string;
  shortTitle?: string;
  content?: string;
  onClick: () => void;
}

const ListItem: FC<ListItemProps> = (props) => {
  const { onClick } = props;
  return (
    <BlogItemStyle onClick={onClick}>
      <div className="item-description">
        <div className="item-description-time">10 OCT 2023</div>
        <div className="item-description-tag">记录</div>
      </div>
      <div className="item-content">
        <h4>Lorem.</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          quis.
        </p>
      </div>
      <div className="item-picture" />
    </BlogItemStyle>
  );
};

export default ListItem;
