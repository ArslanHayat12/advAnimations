import { styled, setup } from 'goober';
import { createElement } from 'react';

setup(createElement);

type ImageProps = { imagepath: string };

export const ImageStyle = styled('div')<ImageProps>`
  ${({ imagepath }) => `
	    background: #ccc url('${imagepath}') no-repeat center;
		background-size: cover;
    `}
  width: 100vw;
  max-height: 50vw;
  min-height: 50vw;

  @media (max-width: 550px) {
    min-height: 60vw;
    max-height: 60vw;
  }
  @media (max-width: 500px) {
    min-height: 70vw;
    max-height: 70vw;
  }
  @media (max-width: 450px) {
    min-height: 80vw;
    max-height: 80vw;
  }
  @media (max-width: 400px) {
    min-height: 90vw;
    max-height: 90vw;
  }
  @media (max-width: 350px) {
    min-height: 100vw;
    max-height: 100vw;
  }
`;
