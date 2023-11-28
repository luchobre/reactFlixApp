import React, { useEffect, useState } from "react";
import { fetchData } from "../../services/api";
import "./Series.css";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import { Spinner } from "@nextui-org/react";
// register Swiper custom elements
register();

const Series = () => {
  const [series, setSeries] = useState([]);
  const [series2, setSeries2] = useState([]);
  const [series3, setSeries3] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetchData(1,'popular','tv')
      .then((res) => {
        setIsLoading(false)
        setSeries(res.results);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetchData(2,'popular','tv')
      .then((res) => {
        setSeries2(res.results);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetchData(3,'popular','tv')
      .then((res) => {
        setSeries3(res.results);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetchData(1,'top_rated','tv')
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
      <h2>Popular series</h2>
      {
        isLoading
        ? <Spinner />
        :
      <swiper-container className="slider-container" navigation="true" pagination="true" scrollbar="true" slides-per-view={slidesPerView} speed="500" css-mode="true">
        {series.map((serie) => (
          <swiper-slide key={serie.id}>
            <div className="item" >
              <a href={`/tv/${serie.id}`}>
              <img
                className="serie_image"
                src={`${URL_IMAGE}${serie.poster_path}`}
              ></img>
              </a>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
      }

      <h2>Iconic series</h2>
      {
        isLoading
        ? <Spinner />
        :
      <swiper-container className="slider-container" navigation="true" pagination="true" scrollbar="true" slides-per-view={slidesPerView} speed="500" css-mode="true">
        {topRated.map((serie) => (
          <swiper-slide key={serie.id}>
            <div className="item" >
              <a href={`/tv/${serie.id}`}>
              <img
                className="serie_image"
                src={`${URL_IMAGE}${serie.poster_path}`}
              ></img>
              </a>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    }
      <h2> Kids series</h2>
      {
        isLoading
        ? <Spinner />
        :
      <swiper-container className="slider-container" navigation="true" pagination="true" scrollbar="true" slides-per-view={slidesPerView} speed="500" css-mode="true">
        {series2.map((serie) => (
          <swiper-slide key={serie.id}>
            <div className="item" >
              <a href={`/tv/${serie.id}`}>
              <img
                className="serie_image"
                src={`${URL_IMAGE}${serie.poster_path}`}
              ></img>
              </a>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    }
      <h2> Claim series</h2>
      {
        isLoading
        ? <Spinner />
        :
      <swiper-container className="slider-container" navigation="true" pagination="true" scrollbar="true" slides-per-view={slidesPerView} speed="500" css-mode="true">
        {series3.map((serie) => (
          <swiper-slide key={serie.id}>
            <div className="item" >
              <a href={`/tv/${serie.id}`}>
              <img
                className="serie_image"
                src={`${URL_IMAGE}${serie.poster_path}`}
              ></img>
              </a>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    }
    </div>
  );
};

export default Series;
