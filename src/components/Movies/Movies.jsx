import React, { useEffect, useState } from "react";
import { fetchData } from "../../services/api";
import "./Movies.css";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [movies2, setMovies2] = useState([]);
  const [movies3, setMovies3] = useState([]);
  const [topRated, setTopRated] = useState([]);
  

  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";
  
  useEffect(() => {
    fetchData(1)
    .then((res) => {
      setMovies(res.results);
    })
      .catch((error) => console.error(error));
    }, []);
    
    useEffect(() => {
      fetchData(2)
      .then((res) => {
        setMovies2(res.results);
      })
      .catch((error) => console.error(error));
    }, []);
    
    useEffect(() => {
      fetchData(4)
      .then((res) => {
        setMovies3(res.results);
      })
      .catch((error) => console.error(error));
    }, []);
    
    useEffect(() => {
      fetchData(1, 'top_rated')
      .then((res) => {
        setTopRated(res.results);
      })
      .catch((error) => console.error(error));
    }, []);

    
    
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
    const handleResize = () => {
      setSlidesPerView(calculateSlidesPerView());
    };
    
    const calculateSlidesPerView = () => {
      return window.innerWidth < 768 ? 3 : 6;
    };
    const [slidesPerView, setSlidesPerView] = useState(calculateSlidesPerView());

  return (
    <div className="container">
      <h2>Popular movies
      <swiper-container className="slider-container" navigation="true" pagination="true" scrollbar="true" slides-per-view={slidesPerView} speed="500" css-mode="true">
        {movies.map((movie) => (
          <swiper-slide key={movie.id}>
            <div className="item" >
              <a href={`/movie/${movie.id}`}>
              <img
                className="movie_image"
                src={`${URL_IMAGE}${movie.poster_path}`}
              ></img>
              </a>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
      </h2>
      <h2>Iconic movies
      <swiper-container className="slider-container" navigation="true" pagination="true" scrollbar="true" slides-per-view={slidesPerView} speed="500" css-mode="true">
        {topRated.map((movie) => (
          <swiper-slide key={movie.id}>
            <div className="item" >
              <a href={`/movie/${movie.id}`}>
              <img
                className="movie_image"
                src={`${URL_IMAGE}${movie.poster_path}`}
              ></img>
              </a>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
      </h2>
      <h2> Kids movies
      <swiper-container className="slider-container" navigation="true" pagination="true" scrollbar="true" slides-per-view={slidesPerView} speed="500" css-mode="true">
        {movies2.map((movie) => (
          <swiper-slide key={movie.id}>
            <div className="item" >
              <a href={`/movie/${movie.id}`}>
              <img
                className="movie_image"
                src={`${URL_IMAGE}${movie.poster_path}`}
              ></img>
              </a>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
      </h2>
      <h2> Claim movies
      <swiper-container className="slider-container" navigation="true" pagination="true" scrollbar="true" slides-per-view={slidesPerView} speed="500" css-mode="true">
        {movies3.map((movie) => (
          <swiper-slide key={movie.id}>
            <div className="item" >
              <a href={`/movie/${movie.id}`}>
              <img
                className="movie_image"
                src={`${URL_IMAGE}${movie.poster_path}`}
              ></img>
              </a>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
      </h2>
    </div>
  );
};

export default Movies;
