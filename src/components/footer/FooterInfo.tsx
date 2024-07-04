import "./FooterInfo.css";

type FooterProps = {
  icon: string;
  contact: string;
};

export default function FooterInfo({ icon, contact }: FooterProps) {
  return (
    <div className="footer-info">
      <img src={icon} alt="mail address" className="contacts-img" />
      <p className="contacts-name">{contact}</p>
    </div>
  );
}
