import Card from "../card/Card";
// import { Carousel } from "antd"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CarouselPets.css";

// const contentStyle = {
//     display: 'flex',
//     FlexDirection: 'column',
//     alignItems: 'center',
//     width: '200px',
//     height: '350px',
//     padding: '2%',
//     backgroundColor: '#FAFAFA',
//     border: 'none',
//     borderRadius: '10px',
//     transition: 'linear background-color .3s',
// };

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 2500 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 2500, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselPets = () => {
  return (
    <div>
      <Carousel responsive={responsive}>
        <div className="card">
          <img
            className="card-image"
            alt="animal"
            src="./src/components/card/images/3.png"
          />
          <p className="card-name">Katrine</p>
          <button className="card-btn">
            <p className="btn-text">Learn more</p>
          </button>
        </div>
        <div className="card">
          <img
            className="card-image"
            alt="animal"
            src="./src/components/card/images/1.png"
          />
          <p className="card-name">Jennifer</p>
          <button className="card-btn">
            <p className="btn-text">Learn more</p>
          </button>
        </div>
        <div className="card">
          <img
            className="card-image"
            alt="animal"
            src="./src/components/card/images/2.png"
          />
          <p className="card-name">Woody</p>
          <button className="card-btn">
            <p className="btn-text">Learn more</p>
          </button>
        </div>

        <div className="card">
          <img
            className="card-image"
            alt="animal"
            src="./src/components/card/images/3.png"
          />
          <p className="card-name">Katrine</p>
          <button className="card-btn">
            <p className="btn-text">Learn more</p>
          </button>
        </div>
        <div className="card">
          <img
            className="card-image"
            alt="animal"
            src="./src/components/card/images/1.png"
          />
          <p className="card-name">Jennifer</p>
          <button className="card-btn">
            <p className="btn-text">Learn more</p>
          </button>
        </div>
        <div className="card">
          <img
            className="card-image"
            alt="animal"
            src="./src/components/card/images/2.png"
          />
          <p className="card-name">Woody</p>
          <button className="card-btn">
            <p className="btn-text">Learn more</p>
          </button>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselPets;

{
  /* <Card title="Katrine" image="./src/components/card/images/3.png" ></Card>
        <Card title="Jennifer" image="./src/components/card/images/1.png"></Card>
        <Card title="Woody" image="./src/components/card/images/2.png"></Card> */
}
