import "./Card.css";

type CardProps = {
  title: string;
  image: string;
};

export default function Card({ title, image }: CardProps) {
  return (
    <div className="card">
      <img className="card-image" alt="animal" src={image} draggable={false} />
      <p className="card-name">{title}</p>
      <button className="card-btn">
        <p className="btn-text">Learn more</p>
      </button>
    </div>
  );
}
