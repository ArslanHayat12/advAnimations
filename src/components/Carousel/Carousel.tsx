import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { moveToSlide, playSlideshow } from '../../utils';
import ControlItem from '../ControlItem/ControlItem';
import Image from '../Image/Image';
import { CarouselContainer, CarouselControls, ImagesWrapper } from './Style';

interface CarouselProps {
  imagePaths: string[];
  autoplay: boolean;
  interval: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  imagePaths,
  autoplay = false,
  interval = 0,
}) => {
  const slidesLength: number = imagePaths.length;
  const carouselWidth: number = 100; // Full width

  // Reference to the div containing slides
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  const [slideNumber, setSlideNumber] = useState(0);

  const onChangeSlideClick = useCallback(
    (index: number) => {
      const slidePosition: number = index * -carouselWidth;

      moveToSlide(index, slidePosition, imageWrapperRef, setSlideNumber);
    },
    [imageWrapperRef, setSlideNumber]
  );

  // Renders the images to display on screen
  const renderImages = useMemo(() => {
    return imagePaths.map((image: string, index: number) => (
      <Image imagePath={image} key={index} />
    ));
  }, [imagePaths]);

  // Renders the carousel controls
  const renderControls = useMemo(() => {
    return imagePaths.map((_, index: number) => {
      const isSelected: boolean = slideNumber === index;

      return (
        <ControlItem
          selected={isSelected}
          key={index}
          onClick={() => onChangeSlideClick(index)}
        />
      );
    });
  }, [slideNumber, imagePaths, onChangeSlideClick]);

  useEffect(() => {
    // Autoplays the slides
    if (autoplay) {
      playSlideshow(
        slideNumber,
        slidesLength,
        carouselWidth,
        interval,
        imageWrapperRef,
        setSlideNumber
      );
    }
  }, [slideNumber, slidesLength, autoplay, interval]);

  return (
    <CarouselContainer>
      <ImagesWrapper ref={imageWrapperRef}>{renderImages}</ImagesWrapper>

      <CarouselControls>{renderControls}</CarouselControls>
    </CarouselContainer>
  );
};
