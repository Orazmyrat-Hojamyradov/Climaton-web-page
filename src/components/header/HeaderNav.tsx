import "./HeaderNav.css";
import { Link } from "react-scroll";

const HeaderNav = () => {
  return (
    <div className="header-nav">
      <Link
        to="Start"
        spy={true}
        smooth={true}
        offset={0}
        className="logo-link"
      >
        <div className="header-logo-box">
          <h2 className="logo-title">Cozy House</h2>
          <p className="logo-subtitle">Shelter for pets in Boston</p>
        </div>
      </Link>
      <div className="header-nav-box">
        <Link
          to="About"
          spy={true}
          smooth={true}
          offset={-100}
          className="link"
        >
          About the shelter
        </Link>
        <Link to="Pets" spy={true} smooth={true} offset={-100} className="link">
          Our pets
        </Link>
        <Link to="Help" spy={true} smooth={true} offset={-100} className="link">
          Help the shelter
        </Link>
        <Link
          to="Contacts"
          spy={true}
          smooth={true}
          offset={-500}
          className="link"
        >
          Contacts
        </Link>
      </div>
      <div className="header-nav-box-mobile">
        <div className="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul className="menu">
            <li>
              <Link
                to="About"
                spy={true}
                smooth={true}
                offset={-100}
                className="link"
              >
                About the shelter
              </Link>
            </li>
            <li>
              <Link
                to="Pets"
                spy={true}
                smooth={true}
                offset={-100}
                className="link"
              >
                Our pets
              </Link>
            </li>
            <li>
              <Link
                to="Help"
                spy={true}
                smooth={true}
                offset={-100}
                className="link"
              >
                Help the shelter
              </Link>
            </li>
            <li>
              <Link
                to="Contacts"
                spy={true}
                smooth={true}
                offset={-50}
                className="link"
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
