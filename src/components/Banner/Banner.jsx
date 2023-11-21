import React, { useEffect, useState } from "react";
import "./Banner.css";
import image from "../../assets/Sawxlogo.png";
import ReactPlayer from 'react-player'
import { fetchMovie } from "../../services/oneMovieApi";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovie('951491')
      .then((res) => {
        setMovie(res);
      })
      .catch((error) => console.error(error));
  }, []);


  return (
    <>
      <div className="banner-container">
        <div className="banner-container">
          <div className="video-background">
          <ReactPlayer 
          url='https://www.youtube.com/watch?v=0Nth2F7KCD8'
          width={'100%'}  
          height={'100vh'}
          className='banner-video'
          />
            <div className="content">
              <img src={image} alt="logo" />
              <div className="container-text">
              <p>
                {movie.overview}
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;