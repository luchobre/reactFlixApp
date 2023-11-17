import React, { useEffect, useState } from "react";
import { fetchData } from "../../services/api";
import "./Banner.css";
// import video from "../../assets/videos/saw-trailer.mp4";
import image from "../../assets/sawxlogo.png";

const Banner = () => {
  return (
    <>
      <div className="banner-container">
        <div className="banner-container">
          <div className="video-background">
            {/* <video autoPlay loop id="myVideo" controls preload="auto">
              <source src={video} type="video/mp4" />
              Tu navegador no admite el elemento de video.
            </video> */}
            <div className="content">
              <img src={image} alt="logo" />
              <p>
                Entre los acontecimientos de 'Saw' y 'Saw II', un enfermo y
                desesperado John Kramer viaja a México para someterse a un
                procedimiento médico arriesgado y experimental con la esperanza
                de encontrar una cura milagrosa para su cáncer, sólo para
                descubrir que toda la operación es una estafa para robar a los
                más vulnerables. Armado con un nuevo propósito, el infame
                asesino en serie regresa a su trabajo, dándole la vuelta a los
                estafadores en su forma visceral característica a través de
                trampas tortuosas, trastornadas e ingeniosas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
