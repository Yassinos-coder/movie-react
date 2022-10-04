import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/free-solid-svg-icons";
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
import MovieTitle from "./MovieTitle";
import MovieDescription from "./MovieDescription";
import WatchNow from "./WatchNow";
import MovieCard from "./MovieCard";

const MainContent = () => {
  let Movies = [
    {
      Preview: pic1,
      MovieTitle: <MovieTitle />,
      MovieDescription: <MovieDescription />,
      Button: <WatchNow />
    },
    {
      Preview: pic2,
      MovieTitle: <MovieTitle />,
      MovieDescription: <MovieDescription />,
      Button: <WatchNow />
    },
    {
      Preview: pic3,
      MovieTitle: <MovieTitle />,
      MovieDescription: <MovieDescription />,
      Button: <WatchNow />
    },
    {
      Preview: pic4,
      MovieTitle: <MovieTitle />,
      MovieDescription: <MovieDescription />,
      Button: <WatchNow />
    },
    {
      Preview: pic5,
      MovieTitle: <MovieTitle />,
      MovieDescription: <MovieDescription />,
      Button: <WatchNow />
    },
    {
      Preview: pic6,
      MovieTitle: <MovieTitle />,
      MovieDescription: <MovieDescription />,
      Button: <WatchNow />
    },
    {
      Preview: pic7,
      MovieTitle: <MovieTitle />,
      MovieDescription: <MovieDescription />,
      Button: <WatchNow />
    },
    {
      Preview: pic8,
      MovieTitle: <MovieTitle />,
      MovieDescription: <MovieDescription />,
      Button: <WatchNow />
    },
    {
      Preview: pic9,
      MovieTitle: <MovieTitle />,
      MovieDescription: <MovieDescription />,
      Button: <WatchNow />
    },
    {
      Preview: pic10,
      MovieTitle: <MovieTitle />,
      MovieDescription: <MovieDescription />,
      Button: <WatchNow />
    }
  ];
  return (
    <>
      <div className="MainPage">
        <div className="MoviesContainer">
          {
            
            Movies.map((Movies) => (
              <MovieCard  items= { Movies }/>
            ))
            
          }
        </div>
      </div>
    </>
  );
};

export default MainContent;
