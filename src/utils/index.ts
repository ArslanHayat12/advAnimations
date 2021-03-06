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

export const stackCards = (
  cardIndex: number,
  cardAtTop: number,
  cards: (HTMLDivElement | null)[]
) => {
  if (cardIndex > cardAtTop) {
    for (let i: number = 0; i < cardIndex; i++) {
      const card: HTMLDivElement | null = cards[i]; // Getting the current card

      // Checking if the reference to the current card is not null
      if (card !== null) {
        const cardHeight: number = card.clientHeight - 15; // Getting current card's height to be used for stacking next card on it

        // Scaling the current card to show a stack
        const scale: number = 1 - (cardIndex - i) * 0.03;
        card.style.transform = `scale(${scale})`;

        // Stacking the next card on current card
        cards[i + 1]!.style.marginTop = `-${cardHeight}px`;
      }
    }
  } else {
    for (let i = cardAtTop; i > cardIndex; i--) {
      const card: HTMLDivElement | null = cards[i]; // Getting the current card

      // Checking if the reference to the current card is not null
      if (card !== null) {
        card.style.transform = 'scale(1)';
        card.style.margin = '10px 0px';
      }
    }

    for (let i = cardIndex; i >= 0; i--) {
      const card: HTMLDivElement | null = cards[i]; // Getting the current card

      // Checking if the reference to the current card is not null
      if (card !== null) {
        const scale: number = 1 - (cardIndex - i) * 0.03;
        card.style.transform = `scale(${scale})`;
      }
    }
  }
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
