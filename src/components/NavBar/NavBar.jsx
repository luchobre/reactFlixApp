import React, { useState, useEffect } from "react";
import "./NavBar.css";
import reactFlix from "../../assets/reactflix.png"
import { useAuth } from "../../core/auth/hooks/use_auth";

const NavBar = () => {
  ///LOGIN
  const { logout } = useAuth()


  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else setScroll(false);
    });
  }, []);

  return (
    <div className={`nav ${scroll && "nav_black"}`}>
      <a href="/">
      <img
        className="nav_logo"
        src={reactFlix}
        alt="Reactflix Logo"
      />
      </a>
        <button className='button-logout' onClick={logout}>Log out</button>
      <a >
      <img
        className="user"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="user"
      />
      </a>
    </div>
  );
};

export default NavBar;
