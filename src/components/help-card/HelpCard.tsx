import React from "react";
import "./HelpCard.css";

interface HelpProps {
  title: string;
  image: string;
}

const HelpCard: React.FC<HelpProps> = (props) => {
  return (
    <div className="helpCard">
      <img className="help-card-icon" src={props.image} alt="icon" />
      <p className="icon_name">{props.title}</p>
    </div>
  );
};

export default HelpCard;
