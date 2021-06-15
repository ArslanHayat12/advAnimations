import React, { MouseEventHandler } from 'react';
import { GalleryImageStyle } from './Style';

interface GalleryImageProps {
  imagepath: string;
  width: number;
  selected: boolean;
  onImageClick: MouseEventHandler<HTMLDivElement>;
}

export const GalleryImage: React.FC<GalleryImageProps> = ({
  imagepath,
  width,
  selected,
  onImageClick,
}) => {
  return (
    <GalleryImageStyle
      imagepath={imagepath}
      width={width}
      selected={selected}
      onClick={onImageClick}
    />
  );
};
