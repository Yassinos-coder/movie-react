import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
const WatchNow = () => {
  return (
    <div>
        <button className="button-watch-now">Watch Now <FontAwesomeIcon icon={ faEye } /></button>
      
    </div>
  )
}

export default WatchNow
