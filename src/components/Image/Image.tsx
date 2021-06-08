import React from 'react';
import { ImageStyle } from './Style';

interface ImageProps {
	imagePath: string;
}

const Image: React.FC<ImageProps> = ({ imagePath }) => {
	return <ImageStyle imagepath={imagePath} />;
};

export default Image;
