import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  onClick: () => void;
  hollow?: boolean;
}

const StyledButton = styled.button`
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  padding: 14px 24px;
  color: rgb(255, 255, 255);
  width: 100%;
  border-radius: 8px;
  outline: none;
  border-style: none;
  background: linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%);
  transition: all 0.3s ease-in-out;
  opacity: 0.8;
  margin: 0 0 10px;

  &:hover {
    opacity: 1;
  }
`;

const StyledHollowButton = styled(StyledButton)`
  background: white;
  color: black;
  border-color: rgb(230, 30, 77);

  border-width: 3px;
  border-style: solid;
`;

const Button: FC<Props> = ({ children, hollow, ...props }) => {
  return hollow ? <StyledHollowButton {...props}>{children}</StyledHollowButton> : <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
