import { Link } from "react-scroll";
import HeaderNav from "../../components/header/HeaderNav";
import Puppy from "../../images/start-screen-puppy.png";
import "./StartScreen.css";

const StartScreen = () => {
  return (
    <div className="start-screen" id="Start">
      <HeaderNav />
      <div className="start-screen-content">
        <div className="content">
          <h2 className="start-screen-title">
            Not only people <br /> need a house
          </h2>
          <p className="start-screen-subtitle">
            We offer to give a chance to a little and nice puppy with an
            extremely wide and open heart. He or she will love you more than
            anybody else in the world, you will see!
          </p>
          <button className="btn-primary">
            <Link to="Pets" spy={true} smooth={true} offset={-100}>
              Make a friend
            </Link>
          </button>
        </div>

        <img className="start-screen-image" src={Puppy} alt="puppy" />
      </div>
    </div>
  );
};

export default StartScreen;
