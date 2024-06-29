export const CardData = [
  {
    id: 1,
    title: `Katrine`,
    image: `./src/components/card/images/3.png`,
  },
  {
    id: 2,
    title: `Jennifer`,
    image: `./src/components/card/images/1.png`,
  },
  {
    id: 3,
    title: `Woody`,
    image: `./src/components/card/images/2.png`,
  },
];

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
