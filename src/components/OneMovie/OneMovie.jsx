import { useEffect, useState } from "react";
import { fetchMovie } from "../../services/oneMovieApi";
import "./OneMovie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCirclePlus,
  faClock,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const OneMovie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    fetchMovie(movieId)
      .then((res) => {
        setMovie(res);
        setBackgroundImage(
          `https://image.tmdb.org/t/p/w1280${res.backdrop_path}`
        );
      })
      .catch((error) => console.error(error));
  }, [movieId]);

  return (
    <div className="container-onemovie">
      <div className="container-movie">
        <div
          className="container-video"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover"
          }}
        >
          <div className="buttons">
            <a href="" className="button-play">► Reproducir</a>
            <a href="" className="button-play-media">► Ver</a>
            <a href=""className="button-plus"><FontAwesomeIcon icon={faCirclePlus} style={{ color: "#FFF" }} size="xl"/></a>
            <a href=""className="button-like"><FontAwesomeIcon icon={faThumbsUp} style={{ color: "#FFF" }} size="xl"/></a>
          </div>
        </div>
        <div className="movie-title"><h1>{movie.title}</h1></div>
        <div className="container-text">
          <div className="left-text">
            <div className="left-text-info">
              <p>
                {" "}
                <FontAwesomeIcon
                  icon={faCalendar}
                  style={{ color: "#ffffff" }}
                />
                {movie.release_date}
              </p>
              <p>
                <FontAwesomeIcon icon={faClock} style={{ color: "#ffffff" }} />
                {movie.runtime} minutos
              </p>
              <p>
                <FontAwesomeIcon icon={faThumbsUp} style={{ color: "#FFF" }} />{" "}
                {movie.vote_average}
              </p>
            </div>
            <p> {movie.overview}</p>
          </div>
          <div></div>
          <div className="right-text">
            <p>
              {" "}
              {movie.genres
                ? movie.genres.map((genre) => genre.name).join(", ")
                : "Sin generos disponibles"}
            </p>
            <br />
            <p>
              {" "}
              {movie.production_companies
                ? movie.production_companies.map((companies) => companies.name).join(", ")
                : "Sin productoras disponibles"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneMovie;
