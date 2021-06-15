import React, { useCallback, useMemo, useState } from 'react';
import { AccordionSize } from '../../types';
import { GalleryImage } from '../GalleryImage/GalleryImage';
import { AccordionContainer, Gallery } from './Style';

interface AccordianGalleryProps {
  imagePaths: string[];
  size: AccordionSize;
}

export const AccordianGallery: React.FC<AccordianGalleryProps> = ({
  imagePaths,
  size,
}) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const onImageClick = useCallback(
    (index: number) => {
      setSelectedImage(index);
    },
    [setSelectedImage]
  );

  const renderGallery = useMemo(() => {
    return imagePaths.map((imagePath: string, index: number) => {
      const isImageSelected: boolean = selectedImage === index; // Returns true if image being rendered is selected
      const defaultImageWidth: number = 35 / (imagePaths.length - 1); // Width of images that are not selected

      return (
        <GalleryImage
          key={index}
          imagepath={imagePath}
          width={defaultImageWidth}
          selected={isImageSelected}
          onImageClick={() => onImageClick(index)}
        />
      );
    });
  }, [imagePaths, selectedImage, onImageClick]);

  return (
    <AccordionContainer size={size}>
      <Gallery>{renderGallery}</Gallery>
    </AccordionContainer>
  );
};
