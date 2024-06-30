import "./Pets.css";
import "../../components/card/Card.css";
import CarouselPets from "../../components/carousel/CarouselPets.tsx";
import { useNavigate } from "react-router-dom";

export default function Pets() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/all-pets");
  };

  return (
    <div className="pets" id="Pets">
      <div className="pets-content">
        <h2 className="pets-title">Our friends who are looking for a house</h2>
        <div className="cards">
          <CarouselPets />
        </div>
        <button type="button" onClick={handleClick} className="more">Get to know the rest</button>
      </div>
    </div>
  );
}
