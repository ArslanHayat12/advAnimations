import { styled, setup } from 'goober';
import { createElement } from 'react';

setup(createElement);

interface StackStyleProps {
  containerbackground?: string;
}

export const StackStyle = styled('div')<StackStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  min-height: calc(100vh - 20px);
  ${({ containerbackground }) => `
		background: ${containerbackground !== undefined ? containerbackground : 'none'};
	`}
`;
