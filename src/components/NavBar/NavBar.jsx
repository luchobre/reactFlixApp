import React, { useState, useEffect } from "react";
import "./NavBar.css";
import reactFlix from "../../assets/reactflix.png";
import { useAuth } from "../../core/auth/hooks/use_auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faPenToSquare,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  ///LOGIN
  const { logout } = useAuth();

  const [menuAvatar, setMenuAvatar] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else setScroll(false);
    });
  }, []);

  const handleAvatar = () => {
    setMenuAvatar(!menuAvatar);
  };

  return (
    <div className={`nav ${scroll && "nav_black"}`}>
      <a href="/" className="logo_container">
        <img className="nav_logo" src={reactFlix} alt="Reactflix Logo" />
      </a>
      <div className="nav_container">
        <Link to="/" className="nav_link">Inicio</Link>
        <Link to="/" className="nav_link">Series</Link>
        <Link to="/" className="nav_link">Peliculas</Link>
        <Link to="/" className="nav_link"> Novedades populares</Link>
        <Link to="/" className="nav_link">Mi lista</Link>
        <Link to="/" className="nav_link">Explora por idiomas</Link>
      </div>
      <div>
        <img
          className="user"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="user"
          onClick={handleAvatar}
        />
        {menuAvatar && (
          <div className="menuAvatar-container">
            <a>
              <FontAwesomeIcon
                icon={faPenToSquare}
                size="xl"
                style={{ color: "#fff" }}
              />{" "}
              Administrar perfiles
            </a>
            <a>
              <FontAwesomeIcon
                icon={faRightLeft}
                size="xl"
                style={{ color: "#ffffff" }}
              />{" "}
              Transferir perfil
            </a>
            <a>
              <FontAwesomeIcon
                icon={faUser}
                size="xl"
                style={{ color: "#ffffff" }}
              />{" "}
              Cuenta
            </a>
            <a>
              <FontAwesomeIcon
                icon={faCircleQuestion}
                size="xl"
                style={{ color: "#ffffff" }}
              />{" "}
              Centro de ayuda
            </a>
            <br />
            <hr></hr>
            <br />
            <a onClick={logout}>Cerrar sesión en Reactflix</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
