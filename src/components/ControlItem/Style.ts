import { setup, styled } from 'goober';
import { createElement } from 'react';

setup(createElement);

type ControlItemProps = {
  selected: boolean;
};

export const ControlItemStyle = styled('div')<ControlItemProps>`
  background: white;
  width: 25px;
  height: 5px;
  margin: 0px 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: opacity 1s;
  ${({ selected }) => `
        opacity: ${selected ? 1 : 0.5};
    `}

  @media(max-width: 700px) {
    width: 20px;
    margin: 4px;
    height: 4px;
  }
  @media (max-width: 600px) {
    width: 20px;
    margin: 4px;
    height: 3px;
  }
  @media (max-width: 500px) {
    width: 15px;
    margin: 3px;
    height: 3px;
  }
`;
