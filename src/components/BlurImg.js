import React, { useState } from "react";
import { useEffect } from "react";

// takes the src as an argument and return a promise with the actual image
const preloadImagesWithPromise = (src) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      resolve();
    };

    image.src = src;
  });
};

function BlurImg({ src, base64, alt }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    loadImage();
  });

  const loadImage = async () => {
    await preloadImagesWithPromise(src);
    setLoaded(true);
  };

  const currentSrc = loaded ? src : base64;

  return <img src={currentSrc} alt={alt} />;
}

export default BlurImg;
