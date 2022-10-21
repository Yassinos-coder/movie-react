import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const HeaderBar = () => {
  return (
    <>
      <div className="Header">
        <div className="Header-title-left">
          <p className="p-header-left">Anime-Site</p>
          <p className="p2-header-left">Home</p>
        </div>
        <div className="star-filter">
        </div>
        <div className="signin-button">
          <button className="Button-signin">
            <p>Signin <FontAwesomeIcon icon={faRightToBracket}/></p>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderBar;
