import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
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
        <div className="search-bar-header">
          <div className="search-bar-input">
            <input className="Search-bar" type="text" placeholder="Filter Movie By Title" />
            <button className="Search-bar-button">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
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
