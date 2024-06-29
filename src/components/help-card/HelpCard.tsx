import "./HelpCard.css";

type HelpProps = {
  title: string;
  image: string;
  id?: number;
};

export default function HelpCard({ image, title, id }: HelpProps) {
  return (
    <div key={id} className="helpCard">
      <img className="help-card-icon" src={image} alt="icon" />
      <p className="icon_name">{title}</p>
    </div>
  );
}
