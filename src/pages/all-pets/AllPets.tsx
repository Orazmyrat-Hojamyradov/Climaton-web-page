import Card from "../../components/card/Card";
import "./AllPets.css";
import { CardData } from "../../components/carousel/CardData";

export default function AllPets() {
  return (
    <div className="all-pets">
      <h2 className="all-pets-title">All pets in Climaton</h2>
      <div className="all-pets-cards">
        {CardData.map((card) => (
          <Card key={card.id} title={card.title} image={card.image} />
        ))}
      </div>
    </div>
  );
}
