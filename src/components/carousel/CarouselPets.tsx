import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CarouselPets.css";
import Card from "../card/Card";
import { CardData } from "./CardData";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 2500 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 2500, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 992, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function CarouselPets() {
  return (
    <div>
      <Carousel
        removeArrowOnDeviceType="mobile, tablets"
        keyBoardControl
        pauseOnHover
        responsive={responsive}
      >
        {CardData.map((card) => (
          <Card key={card.id} title={card.title} image={card.image} />
        ))}
      </Carousel>
    </div>
  );
}
