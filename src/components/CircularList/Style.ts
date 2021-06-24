import { styled, setup } from 'goober';
import { createElement, forwardRef } from 'react';

setup(createElement);

interface ListItemProps {
  angle: number;
}

interface ItemDivProps extends ListItemProps {
  selected: boolean;
  isimage: boolean;
  background?: string;
  color?: string;
}

type TextItemProps = {
  overflow: boolean;
};

export const Container = styled('div')`
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  padding: 0px;
`;

export const Circle = styled('div')`
  position: relative;
  height: 100vmin;
  width: 100vmin;
  border-radius: 50%;
  margin-left: calc(-50vmin - 100px);

  @media (max-width: 700px) {
    margin-top: 80px;
  }
  @media (max-width: 550px) {
    height: 80vmin;
    width: 80vmin;
    margin-top: 50px;
    margin-left: calc(-35vmin - 100px);
  }
  @media (max-width: 450px) {
    height: 60vmin;
    width: 60vmin;
    margin-top: 50px;
    margin-left: calc(-25vmin - 100px);
  }
  @media (max-width: 400px) {
    margin-left: calc(-20vmin - 100px);
  }
`;

export const CircleInner = styled('div')`
  position: relative;
  left: 50%;
  top: calc(50% - 75px);
`;

export const ListItem = styled('div', forwardRef)<ListItemProps>`
  position: absolute;
  display: flex;
  flex-direction: row;
  min-width: 50vmin;
  transition: transform 0.5s;
  transform-origin: 0px 0px;
  transform: rotate(${({ angle }) => angle}deg);
`;

export const Bar = styled('div')`
  position: relative;
  width: 35vmin;

  @media (min-width: 820px) {
    width: 40vmin;
  }
  @media (max-width: 820px) {
    width: 45vmin;
  }
  @media (max-width: 700px) {
    width: 40vmin;
  }
  @media (max-width: 550px) {
    width: 45vmin;
  }
  @media (max-width: 450px) {
    width: 55vmin;
  }
  @media (max-width: 400px) {
    width: 60vmin;
  }
`;

export const ItemDiv = styled('div')<ItemDivProps>`
  cursor: pointer;
  border-radius: 50%;
  z-index: 2;
  transition: transform 0.5s;
  transform-origin: 15px 0px;
  ${({ selected, angle, isimage, background, color }) => {
    return `
      background: ${
        isimage
          ? 'transparent'
          : background !== undefined
          ? background
          : '#000000'
      };
      color: ${color !== undefined ? color : '#ffffff'};
      transform: ${
        selected === true ? 'scale(1.15)' : 'scale(1)'
      } rotate(calc(360deg - ${angle}deg));
      opacity: ${selected === true ? 1 : 0.7};
      display: ${(Math.abs(angle) === 90) === true ? 'none' : 'block'};
		`;
  }}
`;

export const ImageItem = styled('img')`
  width: 100px;
  height: 100px;
  margin: 20px;

  @media (max-width: 700px) {
    width: 80px;
    height: 80px;
    margin: 15px;
  }
  @media (max-width: 650px) {
    width: 75px;
    height: 75px;
    margin: 10px;
  }
  @media (max-width: 560px) {
    width: 65px;
    height: 65px;
    margin: 8px;
  }
`;

export const TextItem = styled('p')<TextItemProps>`
  display: flex;
  width: 110px;
  height: 110px;
  margin: 15px;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ overflow }) => `
    justify-content: ${overflow === true ? 'left' : 'center'};
  `}

  @media (max-width: 700px) {
    width: 90px;
    height: 90px;
    margin: 10px;
  }
  @media (max-width: 650px) {
    width: 75px;
    height: 75px;
    margin: 10px;
  }
  @media (max-width: 560px) {
    width: 65px;
    height: 65px;
    margin: 8px;
  }
`;

export const CircleBorderStyle = styled('div')`
  position: absolute;
  width: 80vmin;
  height: 80vmin;
  top: 10vmin;
  left: -2vmin;
  border: 2px solid gray;
  border-radius: 50%;

  @media (max-width: 820px) {
    top: 10vmin;
    left: 6vmin;
  }
  @media (max-width: 750px) {
    top: 7vmin;
    left: 2vmin;
  }
  @media (max-width: 650px) {
    top: 5vmin;
    left: 2vmin;
  }
  @media (max-width: 550px) {
    top: -7vmin;
    left: -2vmin;
  }
  @media (max-width: 450px) {
    top: -18vmin;
    left: 0vmin;
  }
  @media (max-width: 400px) {
    top: -20vmin;
    left: 0vmin;
  }
`;
