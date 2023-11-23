import { useEffect, useState } from "react";
import { fetchSerie } from "../../services/oneSerieApi";
import "../OneMovie/OneMovie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCirclePlus,
  faClock,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const OneSerie = () => {
  const { serieId } = useParams();
  const [serie, setSerie] = useState({});
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    fetchSerie(serieId)
      .then((res) => {
        setSerie(res);
        setBackgroundImage(
          `https://image.tmdb.org/t/p/w1280${res.backdrop_path}`
        );
      })
      .catch((error) => console.error(error));
  }, [serieId]);

  return (
    <div className="container-onemovie">
      <div className="container-movie">
        <div
          className="container-video"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="buttons">
            <a href="" className="button-play">
              ► Reproducir
            </a>
            <a href="" className="button-plus">
              <FontAwesomeIcon
                icon={faCirclePlus}
                style={{ color: "#FFF" }}
                size="xl"
              />
            </a>
            <a href="" className="button-like">
              <FontAwesomeIcon
                icon={faThumbsUp}
                style={{ color: "#FFF" }}
                size="xl"
              />
            </a>
          </div>
        </div>
        <div className="movie-title">
            <h1>{serie.name}</h1>
          </div> 
        <div className="container-text">
          <div className="left-text">
            <div className="left-text-info">
              <p>
                {" "}
                <FontAwesomeIcon
                  icon={faCalendar}
                  style={{ color: "#ffffff" }}
                />
                {serie.first_air_date}
              </p>
              <p>
                <FontAwesomeIcon icon={faClock} style={{ color: "#ffffff" }} />
                {serie.runtime} minutos
              </p>
              <p>
                <FontAwesomeIcon icon={faThumbsUp} style={{ color: "#FFF" }} />{" "}
                {serie.vote_average}
              </p>
            </div>
            <p> {serie.overview}</p>
          </div>
          <div></div>
          <div className="right-text">
            <p>
              {" "}
              {serie.genres
                ? serie.genres.map((genre) => genre.name).join(", ")
                : "Sin generos disponibles"}
            </p>
            <br />
            <p>
              {" "}
              {serie.production_companies
                ? serie.production_companies
                    .map((companies) => companies.name)
                    .join(", ")
                : "Sin productoras disponibles"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneSerie;
