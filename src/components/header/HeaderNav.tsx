import "./HeaderNav.css";
import { Link } from "react-scroll";
import HeaderNavMobile from "./HeaderNavMobile";

export default function HeaderNav() {
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
          offset={-450}
          className="link"
        >
          Contacts
        </Link>
      </div>
      <HeaderNavMobile />
    </div>
  );
}
