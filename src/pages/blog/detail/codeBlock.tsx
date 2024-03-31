import { useEffect, useRef } from "react";
import highLight from "highlight.js";
import styled from "styled-components";
// 主题文件：github、vs.css rainbow.css
import "highlight.js/styles/github.css";

interface IProps {
  language: string;
  children: React.ReactNode;
}

export default (props: IProps) => {
  const { children, language } = props;
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      highLight.highlightBlock(codeRef.current);
    }
  }, []);

  return (
    <Container>
      <code ref={codeRef} className={`language-${language}`}>
        {children}
      </code>
    </Container>
  );
};

const Container = styled.pre`
  code {
    font-family: "SFMono-Regular", "Consolas", "Liberation Mono", "Menlo",
      "monospace";
    border-radius: 3px;
    background-color: rgba(27, 31, 35, 0.05);
  }
`;
