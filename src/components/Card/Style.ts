import { styled, setup } from 'goober';
import { createElement, forwardRef } from 'react';

setup(createElement);

interface CardStyleProps {
  zindex: number;
  cardbackground?: string;
  cardtextcolor?: string;
}

export const CardWrapper = styled('div', forwardRef)<CardStyleProps>`
  min-height: 450px;
  max-height: 450px;
  width: 350px;
  padding: 20px;
  margin: 10px 0px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  transition: transform 0.5s, margin-top 0.5s;
  overflow: hidden;
  ${({ cardbackground, cardtextcolor, zindex }) => `
		background: ${cardbackground !== undefined ? cardbackground : '#353535'};
		color: ${cardtextcolor !== undefined ? cardtextcolor : 'white'};
		z-index: ${zindex};
	`}

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1100px) {
    width: 320px;
  }
  @media (max-width: 520px) {
    width: 300px;
  }
  @media (max-width: 360px) {
    width: 250px;
    min-height: 400px;
    max-height: 420px;
  }
  @media (max-width: 420px) {
    width: 230px;
  }
  @media (max-width: 360px) {
    width: 200px;
  }
  @media (max-height: 700px) {
    min-height: 400px;
    max-height: 420px;
  }
  @media (max-height: 650px) {
    min-height: 380px;
    max-height: 400px;
  }
`;
