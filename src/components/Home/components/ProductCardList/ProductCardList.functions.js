const generateProduct = (index, skeleton = false) => {
  const defaultValue = skeleton ? "" : index;
  return {
    id: index,
    title: `Product Title ${defaultValue}`,
    description: `Product Description ${defaultValue}`,
    price: `Product Price ${defaultValue}`,
    image:
      defaultValue === ""
        ? "https://th.bing.com/th/id/R.298ebad8fd8512e5c306895954a1d33d?rik=HAZ4d4CQSdrcnQ&riu=http%3a%2f%2fcdn.lowgif.com%2ffull%2f111c23b7d2d13458-loading-bar-animated-gif-transparent-background-6-gif-images-download.gif&ehk=TaSjUJ5wW9O%2bzE42nYmRRfmjzFRn7Z9YplgTE64FM6M%3d&risl=&pid=ImgRaw&r=0"
        : `https://picsum.photos/id/${defaultValue}/400/400`,
    className: skeleton ? "skeleton" : "",
  };
};

export const generateProducts = (numberOfProducts) => {
  return Array.from({ length: numberOfProducts }, (_, i) => generateProduct(i));
};

export const generateSkeletonProducts = (numberOfProducts) => {
  return Array.from({ length: numberOfProducts }, (_, i) =>
    generateProduct(i, true)
  );
};

export const addCard = (setCards) => {
  setCards((prevCards) => [generateProduct(prevCards.length), ...prevCards]);
};
