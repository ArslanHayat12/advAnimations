import { styled, setup } from 'goober';
import { createElement } from 'react';

setup(createElement);

type GalleryImageProps = {
  imagepath: string;
  width: number;
  selected: boolean;
};

export const GalleryImageStyle = styled('div')<GalleryImageProps>`
  transition: width 0.5s;
  ${({ imagepath, width, selected }) => `
      background: #ccc url('${imagepath}') no-repeat center;
    	background-size: cover;
			width: ${selected ? `65%` : `${width}%`};
    `}
  height: 100%;
  cursor: pointer;
`;
