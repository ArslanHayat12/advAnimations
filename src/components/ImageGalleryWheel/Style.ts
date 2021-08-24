import styled from 'styled-components';

export const ImageStyled = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  height: 100%;

  img {
    width: 200px;
    height: 200px;
    object-fit: contain;
  }
`;

export const WrapperStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 50px;
  margin-top: 350px;
`;

export const FigCaptionStyled = styled.figcaption`
  text-align: center;
  margin-top: 10px;
`;

export const AnimationWrapperStyled = styled.section`
  display: flex;

  transform-origin: 0 0;
  transform-style: preserve-3d;
  animation-timing-function: cubic-bezier(1, 0.2, 0.2, 1);
  animation-duration: 3s;
  animation-delay: 0s;
`;

export const MainWrapperStyled = styled.section`
  margin: 2em auto 1em 50%;
  height: 140px;
  perspective: 1200px;
  perspective-origin: 0 50%;

  @keyframes rotator {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(40deg);
    }
  }
`;

export const SliderImageStyled = styled.figure`
  position: absolute;
  left: -81px;

  .animation-image {
    padding: 10px;
    border: 1px solid #ccc;
    background: #fff;
    backface-visibility: hidden;
    width: 140px;
  }

  &:nth-of-type(1) {
    .animation-image {
      transform: rotateY(-90deg) translateZ(300px);
    }
  }
  &:nth-of-type(2) {
    .animation-image {
      transform: rotateY(-60deg) translateZ(300px);
    }
  }
  &:nth-of-type(3) {
    .animation-image {
      transform: rotateY(-30deg) translateZ(300px);
    }
  }

  &:nth-of-type(4) {
    .animation-image {
      transform: translateZ(300px);
      background: #342f94;
    }
  }

  &:nth-of-type(5) {
    .animation-image {
      transform: rotateY(30deg) translateZ(300px);
    }
  }

  &:nth-of-type(6) {
    .animation-image {
      transform: rotateY(60deg) translateZ(300px);
    }
  }
`;
