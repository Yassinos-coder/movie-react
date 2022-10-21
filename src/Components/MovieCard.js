import propTypes from 'prop-types'

const MovieCard = (props) => {
  return (
    <div>
      <img src={ props.items.Preview }/>
      <p className="movie-title-card" > { props.items.MovieTitle }</p>
      <p> { props.items.MovieDescription } </p>
      <p> { props.items.Button } </p>
      <p> { props.items.Rate } </p>
    </div>
  )
}

MovieCard.defaultProps = {
    items : {
        Preview: "Failed To Load Content !",
        MovieTitle: "Failed To Load Content !",
        MovieDescription: "Failed To Load Content !",
        Button: "Failed To Load Content !",
        Rate: "Failed To Load Content !",
    }
}

MovieCard.propTypes = {
    items : propTypes.object
}

export default MovieCard
