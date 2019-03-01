const getCloselySizedImage = (imageArray, targetedHeight, threshold) => {
  const nonFallbackImages = imageArray.filter(element => !element.fallback);

  let imageCandidates;

  if (nonFallbackImages.length) {
    imageCandidates = nonFallbackImages;
  } else {
    imageCandidates = imageArray;
  }

  return (
    imageCandidates.find(element => {
      return Math.abs(element.height - targetedHeight) < threshold;
    }) || null
  );
};

export default getCloselySizedImage;
