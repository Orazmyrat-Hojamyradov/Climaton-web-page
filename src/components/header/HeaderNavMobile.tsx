import { Link } from "react-scroll";
import "./HeaderNavMobile.css";
import { useState } from "react";

export default function HeaderNavMobile() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="header-nav-box-mobile">
      <div className="menuToggle">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span></span>
        <span></span>
        <span></span>
        <ul className="menu">
          <li>
            <Link
              onClick={() => setChecked(!checked)}
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
              onClick={() => setChecked(!checked)}
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
              onClick={() => setChecked(!checked)}
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
              onClick={() => setChecked(!checked)}
              to="Contacts"
              spy={true}
              smooth={true}
              offset={-100}
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
