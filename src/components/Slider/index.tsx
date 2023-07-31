import { FC } from "react";
import { Carousel, CarouselProps } from "antd";

import Styled from "styled-components";

interface SliderProps {
  children: React.ReactElement | React.ReactElement[];
  width?: string;
  height?: string;
}

const SimpleSlider: FC<SliderProps & CarouselProps> = ({
  width,
  height,
  children,
  ...restProps
}) => {
  return (
    <Container width={width} height={height}>
      <Carousel {...restProps}>{children}</Carousel>
    </Container>
  );
};

export default SimpleSlider;

const Container = Styled.div<Pick<SliderProps, "height" | "width">>`
  width: ${({ width }) => width || "500px"};
  height: ${({ height }) => height || ""};

  .simple-slider-dots {
    right: 200px;
    width: 10px;
    height: 100px;
    transform: rotate(-45deg);
    li {
      button {
        width: 10px;
        height: 100px;
        &::before {
          display: none;
        }
      }
    }
  }
`;
