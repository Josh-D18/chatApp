import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { BiMenuAltRight } from "react-icons/bi";
// import { AiOutlineClose } from "react-icons/ai";

function Header() {
  return (
    <header className="header">
      <article className="header__content">
        <h2 className="header__content__logo">UChat</h2>
        <nav className="header__content__nav">
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Profile</Link>
            </li>
            <li>
              <Link>Page 3</Link>
            </li>
          </ul>
        </nav>
        <article className="header__content__toggle">
          <BiMenuAltRight />
        </article>
      </article>
    </header>
  );
}

export default Header;
