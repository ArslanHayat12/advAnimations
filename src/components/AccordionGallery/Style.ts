import { styled, setup } from 'goober';
import { createElement } from 'react';
import { AccordionSize } from '../../types';

setup(createElement);

type AccordionContainerProps = {
  size: AccordionSize;
};

export const AccordionContainer = styled('div')<AccordionContainerProps>`
  ${({ size }) => `
    padding: 0px ${size === 'full' ? '0px' : '125px'};

		@media(max-width: 1200px) {
    	padding: 0px ${size === 'full' ? '0px' : '100px'};
    }
		@media(max-width: 1000px) {
    	padding: 0px ${size === 'full' ? '0px' : '75px'};
    }
		@media(max-width: 800px) {
    	padding: 0px ${size === 'full' ? '0px' : '50px'};
    }
    @media(max-width: 500px) {
    	padding: 0px ${size === 'full' ? '0px' : '0px'};
    }
  `}
`;

export const Gallery = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70vh;
  background: lightgray;

  @media (max-width: 1000px) {
    height: 60vh;
  }
  @media (max-width: 850px) {
    height: 55vh;
  }
  @media (max-width: 500px) {
    height: 50vh;
  }
`;
