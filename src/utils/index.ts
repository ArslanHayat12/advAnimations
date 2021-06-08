import { RefObject, SetStateAction } from 'react';
import { DivRefType } from '../types';

export const makeAnglesForCircularList = (
  difference: number,
  length: number
) => {
  return [
    ...Array(3)
      .fill(0)
      .map((x, y) => (x + y) * difference),
    ...Array(length - 3).fill(90),
  ];
};

// Moves the slides on the screen
export const moveToSlide = (
  slideNumber: number,
  position: number,
  imageWrapperRef: RefObject<HTMLDivElement>,
  setSlideNumber: (value: SetStateAction<number>) => void
) => {
  const container: DivRefType = imageWrapperRef.current;

  if (container !== null) {
    container.style.transitionDelay = `${position === 0 ? 0 : 1}ms`;
    container.style.transform = `translateX(${position}vw)`;
    setSlideNumber(slideNumber);
  }
};

// Starts the slideshow when the component is loaded
export const playSlideshow = (
  slideNumber: number,
  slidesLength: number,
  carouselWidth: number,
  carouselDelay: number,
  imageWrapperRef: RefObject<HTMLDivElement>,
  setSlideNumber: (value: SetStateAction<number>) => void
) => {
  if (slideNumber === slidesLength) {
    // If last slide then move to the first slide
    moveToSlide(0, 0, imageWrapperRef, setSlideNumber);
  } else {
    setTimeout(() => {
      const nextSlideNumber: number = slideNumber + 1;
      const slidePosition: number = nextSlideNumber * -carouselWidth;

      moveToSlide(
        nextSlideNumber,
        slidePosition,
        imageWrapperRef,
        setSlideNumber
      );
    }, carouselDelay);
  }
};
