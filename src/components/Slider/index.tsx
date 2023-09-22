import { FC, useRef } from "react";
import { ConfigProvider, Carousel, CarouselProps } from "antd";

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
  const carouselRef = useRef(null);

  return (
    <Container width={width} height={height}>
      <ConfigProvider
        theme={{
          components: {
            Carousel: {
              dotActiveWidth: 10,
              dotHeight: 60,
              dotWidth: 20,
            },
          },
        }}
      >
        <Carousel
          dotPosition="right"
          dots={{
            className: "simple-slider-dots",
          }}
          ref={carouselRef}
          {...restProps}
        >
          {children}
        </Carousel>
      </ConfigProvider>
    </Container>
  );
};

export default SimpleSlider;

const Container = Styled.div<Pick<SliderProps, "height" | "width">>`
  width: ${({ width }) => width || "100vw"};
  height: ${({ height }) => height || "100vh"};

  /* 默认样式 */
  .ant-carousel {
    .slick-vertical .slick-slide {
      border: none;
    }
  }
  .simple-slider-dots {
    right: 10%;
    li {
      transform: rotate(60deg);
      margin: 50% 0;
      button {
        border-radius: 10px;
        &::before {
          display: none;
        }
      }

      /* 选中样式 */
      /* &.slick-active {
        width: 10px;
        height: 60px;
        button {
          width: 10px;
          height: 60px;
        }
      } */
    }
  }
`;
