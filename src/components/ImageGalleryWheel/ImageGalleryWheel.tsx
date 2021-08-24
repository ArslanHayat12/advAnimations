import React, { useEffect, useState } from 'react';

import {
  AnimationWrapperStyled,
  MainWrapperStyled,
  SliderImageStyled,
} from './Style';

type ImageGalleryWheelPropType = {
  inputArray: any ;
};

export default function ImageGalleryWheel({
  inputArray,
}: ImageGalleryWheelPropType) {
  const animationWrapperRef = React.createRef<any>();

  inputArray;
  
  const [imageArray, setImageArray] = useState(inputArray);

  const FancyAnimation = React.forwardRef(
    (props: any, animationWrapperRef: any) => (
      <AnimationWrapperStyled id="rotator" ref={animationWrapperRef}>
        {props.imageArray?.map((b: { url: string; caption: string }) => (
          <SliderImageStyled key={b.caption}>
            <img className={`animation-image`} src={b.url} alt="alt" />
          </SliderImageStyled>
        ))}
      </AnimationWrapperStyled>
    )
  );

  useEffect(() => {
    //custom hooks
    const interval = setTimeout(() => {
      if (animationWrapperRef.current) {
        animationWrapperRef.current.style.animationName = 'rotator';
      }

      setTimeout(() => {
        let newArray = [...imageArray];

        const lastElement = newArray.pop();
        newArray.unshift(lastElement as any);

        setImageArray([...newArray]);

        if (animationWrapperRef.current) {
          animationWrapperRef.current.style.animationName = '';
        }
      }, 3000);
    }, 3000);
    return () => clearInterval(interval);
  }, [imageArray]);

  return (
    <MainWrapperStyled>
      <FancyAnimation
        imageArray={imageArray}
        ref={animationWrapperRef}
      ></FancyAnimation>
    </MainWrapperStyled>
  );
}
