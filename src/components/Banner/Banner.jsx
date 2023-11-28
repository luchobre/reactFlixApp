import React, { useEffect, useState } from "react";
import "./Banner.css";
import image from "../../assets/Sawxlogo.png";
import ReactPlayer from "react-player";
import { fetchMovie } from "../../services/oneMovieApi";
import SpinnerComp from '../Spinner/SpinnerComp'

const Banner = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMovie("951491")
      .then((res) => {
        setIsLoading(false);
        setMovie(res);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
        <div className="banner-container">
          <div className="banner-container">
          {isLoading ? (
        <SpinnerComp />
      ) : (
            <div className="video-background">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=0Nth2F7KCD8"
                width={"100%"}
                height={"60vh"}
                className="banner-video"
              />
              <div className="content">
                <img src={image} alt="logo" />
                <div className="banner-text">{movie.overview}</div>
              </div>
            </div>
        )}
          </div>
        </div>
    </>
  );
};

export default Banner;
