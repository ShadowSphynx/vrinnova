import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import navOptions from "../../data/navOptions";
import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  const [isMobile, setMobile] = useState(false);
  const [scrolled, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    const handleResize = () => setMobile(window.innerWidth <= 768);

    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full flex justify-center z-30 transition-all 
        ${isMobile || scrolled ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl" : "bg-white/0"}
      `}
    >
      <nav className="navbar container">
        <div className="order-0">
          <Link className="navbar-brand inline-block" to="/">
            <img alt="Vrinnova" fetchpriority="high" width="180" height="120" src={logo} />
          </Link>
        </div>
        <input id="nav-toggle" className="hidden" type="checkbox" />
        <label
          id="show-button"
          htmlFor="nav-toggle"
          className="order-3 flex cursor-pointer items-center text-dark dark:text-white lg:order-1 lg:hidden"
        >
          <svg className="h-6 fill-current" viewBox="0 0 20 20">
            <title>Menu Open</title>
            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
          </svg>
        </label>
        <label
          id="hide-button"
          htmlFor="nav-toggle"
          className="order-3 hidden cursor-pointer items-center text-dark dark:text-white lg:order-1"
        >
          <svg className="h-6 fill-current" viewBox="0 0 20 20">
            <title>Menu Close</title>
            <polygon
              points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
              transform="rotate(45 10 10)"
            ></polygon>
          </svg>
        </label>
        <ul
          id="nav-menu"
          className="navbar-nav order-3 md:hidden hidden w-full pb-6 lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8"
        >
          {navOptions.map((option) => (
            <li key={option.label} className="nav-item nav-dropdown group relative">
              <Link
                className="nav-link inline-flex items-center"
                to={option.path}
                state={{
                  header: option.header,
                  description: option.description,
                }}
              >
                {option.label}
                {option.subOptions && (
                  <svg className={`${isMobile ? "hidden" : "h-4 w-4 fill-current"}`} viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                  </svg>
                )}
              </Link>
              {option.subOptions && (
                <div
                  className={`${
                    isMobile
                      ? "hidden"
                      : "w-max nav-dropdown-list hidden group-hover:block gap-2 sm:invisible sm:absolute sm:block sm:opacity-0 sm:group-hover:visible sm:group-hover:opacity-100 lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100"
                  }`}
                >
                  {option.subOptions.map((subOption) => (
                    <div key={subOption.label} className="nav-dropdown-item">
                      <Link
                        className="nav-dropdown-link block"
                        to={subOption.path}
                        state={{
                          header: subOption.header,
                          description: subOption.description,
                        }}
                      >
                        {subOption.label}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
