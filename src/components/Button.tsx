import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  padding: 14px 24px;
  color: rgb(255, 255, 255);
  width: 100%;
  margin: 0;
  border-radius: 8px;
  outline: none;
  border-style: none;
  background: linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%);
  transition: all 0.3s ease-in-out;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const Button: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Button;
