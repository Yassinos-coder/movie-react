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

const MainContent = () => {
  return (
    <>
      <div className="MainPage">
        <div className="MoviesContainer">
          <div>
            <img src={pic1} alt="" />
            <div className="MovieInfo">
              <MovieTitle />
              <MovieDescription />
              <WatchNow />
            </div>
          </div>
          <div>
            <img src={pic2} alt="" />
            <div className="MovieInfo">
              <MovieTitle />
              <MovieDescription />
              <WatchNow />
            </div>
          </div>
          <div>
            <img src={pic3} alt="" />
            <div className="MovieInfo">
              <MovieTitle />
              <MovieDescription />
              <WatchNow />
            </div>
          </div>
          <div>
            <img src={pic4} alt="" />
            <div className="MovieInfo">
              <MovieTitle />
              <MovieDescription />
              <WatchNow />
            </div>
          </div>
          <div>
            <img src={pic5} alt="" />
            <div className="MovieInfo">
              <MovieTitle />
              <MovieDescription />
              <WatchNow />
            </div>
          </div>

          <div>
            <img src={pic6} alt="" />
            <div className="MovieInfo">
              <MovieTitle />
              <MovieDescription />
              <WatchNow />
            </div>
          </div>
          <div>
            <img src={pic7} alt="" />
            <div className="MovieInfo">
              <MovieTitle />
              <MovieDescription />
              <WatchNow />
            </div>
          </div>
          <div>
            <img src={pic8} alt="" />
            <div className="MovieInfo">
              <MovieTitle />
              <MovieDescription />
              <WatchNow />
            </div>
          </div>
          <div>
            <img src={pic9} alt="" />
            <div className="MovieInfo">
              <MovieTitle />
              <MovieDescription />
              <WatchNow />
            </div>
          </div>
          <div>
            <img src={pic10} alt="" />
            <div className="MovieInfo">
              <MovieTitle />
              <MovieDescription />
              <WatchNow />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
