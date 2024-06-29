import "./HelpCard.css";

type HelpProps = {
  title: string;
  image: string;
};

export default function HelpCard({ image, title }: HelpProps) {
  return (
    <div className="helpCard">
      <img className="help-card-icon" src={image} alt="icon" />
      <p className="icon_name">{title}</p>
    </div>
  );
}
