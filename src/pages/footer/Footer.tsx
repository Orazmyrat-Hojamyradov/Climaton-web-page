import footerPuppy from "./footer-puppy.png";
import FooterInfo from "../../components/footer/FooterInfo";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="Contacts">
      <div className="footer-content">
        <div className="footer-contacts">
          <div className="contacts-card">
            <div className="contacts">
              <h2 className="contacts-title">For questions and suggestions</h2>
              <FooterInfo
                contact="email@shelter.com"
                icon={"./src/components/footer/icons/icon-email.png"}
              />
              <FooterInfo
                contact="+13 674 567 75 54"
                icon={"./src/components/footer/icons/icon-phone.png"}
              />
            </div>
            <div className="location">
              <h2 className="contacts-title">We are waiting for your visit</h2>
              <FooterInfo
                contact="1 Central Street, Boston (entrance from the store)"
                icon={"./src/components/footer/icons/icon-marker.png"}
              />
              <FooterInfo
                contact="18 South Park, London"
                icon={"./src/components/footer/icons/icon-marker.png"}
              />
            </div>
          </div>
        </div>
        <img className="footer-img" src={footerPuppy} alt="puppy" />
      </div>
    </div>
  );
};

export default Footer;
