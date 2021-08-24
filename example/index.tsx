import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ImageGalleryWheel from './../src/components/ImageGalleryWheel/ImageGalleryWheel';

const App = () => {
  const imagesArray = [
    { url: 'http://commondatastorage.googleapis.com/codeskulptor-assets/week5-triangle.png', caption: 'A' },
    { url: 'http://commondatastorage.googleapis.com/codeskulptor-assets/week5-triangle.png', caption: 'B' },
    { url: 'http://commondatastorage.googleapis.com/codeskulptor-assets/week5-triangle.png', caption: 'C' },
    { url: 'http://commondatastorage.googleapis.com/codeskulptor-assets/week5-triangle.png', caption: 'E' },
    { url: 'http://commondatastorage.googleapis.com/codeskulptor-assets/week5-triangle.png', caption: 'F' },
    { url: 'http://commondatastorage.googleapis.com/codeskulptor-assets/week5-triangle.png', caption: 'G' },
    { url: 'http://commondatastorage.googleapis.com/codeskulptor-assets/week5-triangle.png', caption: 'I' },
    { url: 'http://commondatastorage.googleapis.com/codeskulptor-assets/week5-triangle.png', caption: 'J' },
    { url: 'http://commondatastorage.googleapis.com/codeskulptor-assets/week5-triangle.png', caption: 'K' },
    { url: 'http://commondatastorage.googleapis.com/codeskulptor-assets/week5-triangle.png', caption: 'L' },
    { url: 'http://commondatastorage.googleapis.com/codeskulptor-assets/week5-triangle.png', caption: 'M' },
  ];

  return (
    <div>
      <ImageGalleryWheel inputArray={imagesArray} />
   }
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
