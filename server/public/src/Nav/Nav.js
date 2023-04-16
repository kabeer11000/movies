import React, { useState, useEffect } from 'react';
import "./Nav.css";

function Nav() {
  const [show, handleshow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true)
      } else handleshow(false);
    });
    return () => {
      window.removeEventListener("scroll")
    }
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://docs.kabeercloud.tk/c/synced/6273fa5e26b3a---b862fb2e08f8e07c0f22f0ab9befb163.png"
        alt="Netflix Logo"
      />
      <div hidden={true}>
        <form>
          <input type={"text"}/>
        </form>
      </div>
    </div>
  )
}

export default Nav
