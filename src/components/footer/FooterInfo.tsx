import React from "react";
import "./FooterInfo.css";

interface FooterProps {
  icon: string;
  contact: string;
}

const FooterInfo: React.FC<FooterProps> = (props) => {
  return (
    <div className="footer-info">
      <img src={props.icon} alt="mail address" className="contacts-img" />
      <p className="contacts-name">{props.contact}</p>
    </div>
  );
};

export default FooterInfo;
