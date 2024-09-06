import "./Pets.css";
import "../../components/card/Card.css";
import CarouselPets from "../../components/carousel/CarouselPets.tsx";

export default function Pets() {
  return (
    <div className="pets" id="Pets">
      <div className="pets-content">
        <h2 className="pets-title">Our friends who are looking for a house</h2>
        <div className="cards">
          <CarouselPets />
        </div>
        <button type="button" className="more">
          Get to know the rest
        </button>
      </div>
    </div>
  );
}
