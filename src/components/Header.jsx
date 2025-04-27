import { useState } from "react";

export default function Header() {
  // truthy state for mobile Menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bookmark__header">
      {/* overlay */}
      <div
        className={isMenuOpen ? "overlay" : "hidden"}
        aria-hidden="true"
      ></div>
      {/* header title with logo */}
      <div className="bookmark__headerLogo">
        <img src="/assets/images/logo-bookmark.svg" alt="bookmark logo" />
      </div>
      {/* bookmark nav buttons wiht login */}
      <nav className="bookmark__headerNav" aria-label="main nav">
        {/* for mobile {hamburger}  */}
        <button className={!isMenuOpen ? "hamburgerMenu" : "hidden"} onClick={() => setIsMenuOpen(true)} aria-label="open menu" aria-expanded={isMenuOpen} aria-controls="mobileNav">
          <img
            // className={!isMenuOpen ? "hamburgerMenu" : "hidden"}
            src="/assets/images/icon-hamburger.svg"
            alt="hamburger"
            aria-hidden="true"
          />
        </button>
        {/* show close menu if */}
        {isMenuOpen && (
          <>
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="close menu"
              className="closeBtn"
            >
              <img
                src="/assets/images/icon-close.svg"
                alt="icon close"
                aria-hidden="true"
              />
            </button>
            {/* mobile links */}
            <ul className="bookmark__headerMoblieNavLinks" id="mobileNav">
              <li>
                <a href="#feature">feature</a>
              </li>
              <li>
                <a href="#pricing">pricing</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li className="login">
                <a href="#login">login</a>
              </li>
            </ul>
          </>
        )}
        {/* for desktop links */}
        <ul className="bookmark__headerDesktopNavLinks">
          <li>
            <a href="#feature">feature</a>
          </li>
          <li>
            <a href="#pricing">pricing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li className="login">
            <a href="#login">login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
