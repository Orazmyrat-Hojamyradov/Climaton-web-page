import { Link } from "react-scroll";
import "./HeaderNavMobile.css";
// import "./HeaderNav.css";

export default function HeaderNavMobile() {
  return (
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
  );
}
