import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'
import "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic1 from "../img/anime_pics/pic1.jpg";
import pic2 from "../img/anime_pics/pic2.jpg";
import pic3 from "../img/anime_pics/pic3.jpg";
import pic4 from "../img/anime_pics/pic4.jpg";
import pic5 from "../img/anime_pics/pic5.jpg";
import pic6 from "../img/anime_pics/pic6.jpg";
import pic7 from "../img/anime_pics/pic7.jpg";
import pic8 from "../img/anime_pics/pic8.jpg";
import pic9 from "../img/anime_pics/pic9.jpg";
import pic10 from "../img/anime_pics/pic10.jpg";
import MovieDescription from "./MovieDescription";
import WatchNow from "./WatchNow";
import MovieCard from "./MovieCard";
import Rating from "./Rating"
import React, { useState,useRef } from 'react'

const MainContent = () => {
  const SearchBarInput = React.createRef()
  const [movies, setMovies] = useState([
    {
      Preview: pic1,
      MovieTitle: 'Army Without Time',
      MovieDescription: <MovieDescription />,
      Button: <WatchNow />,
      Rate: <Rating />
    },
    {
      Preview: pic2,
      MovieTitle: 'Spider Of The Land',
      MovieDescription: <MovieDescription />,
      Button: <WatchNow />,
      Rate: <Rating />
    },
    {
      Preview: pic3,
      MovieTitle: 'Warriors Of Stone',
      MovieDescription: <MovieDescription />,
      Button: <WatchNow />,
      Rate: <Rating />
    },
    {
      Preview: pic4,
      MovieTitle: 'Giants Of The Great',
      MovieDescription: <MovieDescription />,
      Button: <WatchNow />,
      Rate: <Rating />
    },
    {
      Preview: pic5,
      MovieTitle: 'Guardians And Swindlers',
      MovieDescription: <MovieDescription />,
      Button: <WatchNow />,
      Rate: <Rating />
    },
    {
      Preview: pic6,
      MovieTitle: 'Blacksmiths And Boys',
      MovieDescription: <MovieDescription />,
      Button: <WatchNow />,
      Rate: <Rating />
    },
    {
      Preview: pic7,
      MovieTitle: 'Luck Of The Light',
      MovieDescription: <MovieDescription />,
      Button: <WatchNow />,
      Rate: <Rating />
    },
    {
      Preview: pic8,
      MovieTitle: 'Spire With Immortality',
      MovieDescription: <MovieDescription />,
      Button: <WatchNow />,
      Rate: <Rating />
    },
    {
      Preview: pic9,
      MovieTitle: 'Symbols In My Past',
      MovieDescription: <MovieDescription />,
      Button: <WatchNow />,
      Rate: <Rating />
    },
    {
      Preview: pic10,
      MovieTitle: 'Bravery In My Friends',
      MovieDescription: <MovieDescription />,
      Button: <WatchNow />,
      Rate: <Rating />
    }
  ])

  const [movies_unfiltered, setunMovies] = useState(movies)

  const LookForMovie = () => {
    if (SearchBarInput.current.value === '') {
      console.log('SearchBar isEmpty = true')
      setMovies(movies_unfiltered)
    } else {
      setMovies([...movies.filter((movie) => movie.MovieTitle.includes(SearchBarInput.current.value))]) 
    }
  }


  return (
    <>

      <div className="search-bar-header">
        <div className="search-bar-input">
          <input ref={ SearchBarInput } onChange={()=> LookForMovie()} className="Search-bar" type="text" placeholder="Filter Movie By Title" />
          <button  className="Search-bar-button" onClick={()=> LookForMovie()} >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>

      <div className="MainPage">
        <div className="MoviesContainer">
          {
            
            movies.map((Movies) => (
              <MovieCard  items= { Movies }/>
            ))
            
          }
        </div>
      </div>
  
    </>
  );


};

export default MainContent



