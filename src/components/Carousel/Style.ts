import { styled, setup } from 'goober';
import { createElement, forwardRef } from 'react';

setup(createElement);

export const CarouselContainer = styled('div')`
  position: relative;
  overflow-x: hidden;
`;

export const ImagesWrapper = styled('div', forwardRef)`
  display: inline-flex;
  transition: transform 1s;
`;

export const CarouselControls = styled('div')`
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 50px;
  width: 100%;

  @media (max-width: 800px) {
    bottom: 40px;
  }
  @media (max-width: 700px) {
    bottom: 35px;
  }
  @media (max-width: 500px) {
    bottom: 25px;
  }
  @media (max-width: 400px) {
    bottom: 20px;
  }
`;
