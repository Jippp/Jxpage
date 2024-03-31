import { FC } from "react";
import styled from "styled-components";

interface IconProps {
  url: string;
  size?: string;
}

const SvgIcon: FC<IconProps> = ({ url, size }) => {
  return (
    <Container size={size}>
      <use xlinkHref={url} />
    </Container>
  );
};

export default SvgIcon;

const Container = styled.svg<Pick<IconProps, "size">>`
  width: ${({ size }) => size || 15}px;
  height: ${({ size }) => size || 15}px;
`;
