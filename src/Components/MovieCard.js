
const MovieCard = (props) => {
  return (
    <div>
      <img src={ props.items.Preview }/>
      <p > { props.items.MovieTitle }</p>
      <p> { props.items.MovieDescription } </p>
      <p> { props.items.Button } </p>
    </div>
  )
}

export default MovieCard
