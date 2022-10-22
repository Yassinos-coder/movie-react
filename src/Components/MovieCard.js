import propTypes from "prop-types";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const MovieCard = (props) => {
  const stars = Array(5).fill(0);
  const [currentValue, setValue] = useState(0);
  const [isHover, setHover] = useState(undefined);
  const styleClick = {
    yellow: "#FFD447",
    grey: "#555555",
  };

  const handleClick = (value) => {
    setValue(value);
  };

  const onHover = (newHover) => {
    setHover(newHover);
  };

  const isNotHover = (notHover) => {
    setHover(undefined);
  };
  
  return (
    <div>
      <img src={props.items.Preview} alt="Movie Banner"/>
      <p className="movie-title-card"> {props.items.MovieTitle}</p>
      <p> {props.items.MovieDescription} </p>
      <p> {props.items.Button} </p>

      <div className="div-star-rate">
        {stars.map((_, index) => (
          <FontAwesomeIcon
            className="faStar"
            icon={faStar}
            key={index}
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => onHover(index + 1)}
            onMouseLeave={() => isNotHover(index + 1)}
            color={
              (isHover || currentValue) > index
                ? styleClick.yellow
                : styleClick.grey
            }
          />
        ))}
      </div>
    </div>
  );
};

MovieCard.defaultProps = {
  items: {
    Preview: "Failed To Load Content !",
    MovieTitle: "Failed To Load Content !",
    MovieDescription: "Failed To Load Content !",
    Button: "Failed To Load Content !",
    Ratings: "Failed To Load Content !",
  },
};

MovieCard.propTypes = {
  items: propTypes.object,
};

export default MovieCard;
