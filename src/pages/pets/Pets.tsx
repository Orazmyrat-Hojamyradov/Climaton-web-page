import "./Pets.css";
import "../../components/card/Card.css";
import CarouselPets from "../../components/carousel/CarouselPets.tsx";

const Pets = () => {
  return (
    <div className="pets" id="Pets">
      <div className="pets-content">
        <h2 className="pets-title">Our friends who are looking for a house</h2>
        <div className="cards">
          <CarouselPets />
        </div>
        <button className="more">Get to know the rest</button>
      </div>
    </div>
  );
};

export default Pets;
