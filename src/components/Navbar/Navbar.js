import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  const [isMobile, setMobile] = useState(false);
  const [scrolled, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };

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
          <a className="navbar-brand inline-block" href="/">
            <img alt="Vrinnova" fetchpriority="high" width="180" height="120" src={logo} />
          </a>
        </div>
        <input id="nav-toggle" className="hidden" type="checkbox" />
        <label
          id="show-button"
          for="nav-toggle"
          className="order-3 flex cursor-pointer items-center text-dark dark:text-white lg:order-1 lg:hidden"
        >
          <svg className="h-6 fill-current" viewBox="0 0 20 20">
            <title>Menu Open</title>
            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
          </svg>
        </label>
        <label
          id="hide-button"
          for="nav-toggle"
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
          <li className="nav-item">
            <a className="nav-link block active" href="/">
              Home
            </a>
          </li>
          <li className="nav-item nav-dropdown group relative">
            <a className="nav-link inline-flex items-center" href="/Solution">
              Solutions
              <svg className={`${isMobile ? "hidden" : "h-4 w-4 fill-current"}`} viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
              </svg>
            </a>
            <div
              className={`${
                isMobile
                  ? "hidden"
                  : "w-max nav-dropdown-list hidden group-hover:block gap-2 sm:invisible sm:absolute sm:block sm:opacity-0 sm:group-hover:visible sm:group-hover:opacity-100 lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100"
              }`}
            >
              <div className="nav-dropdown-item">
                <a
                  className="nav-dropdown-link block"
                  href="/Solution/U2FsdGVkX19uRS3YpK%2F%2BWMiEXMp3yJf7txfk9uJs8E5NTzX19RM48VZS87XZjy3T"
                >
                  Cyber Security
                </a>
              </div>
              <div className="nav-dropdown-item">
                <a
                  className="nav-dropdown-link block"
                  href="/Solution/U2FsdGVkX1%2F3%2BVRaq8XDt5E8U6PVuYAZw2m1wlgNQqop92Jffd86v3a%2FAHo60C1Y"
                >
                  System/Cloud
                </a>
              </div>
              <div className="nav-dropdown-item">
                <a
                  className="nav-dropdown-link block"
                  href="/Solution/U2FsdGVkX1%2FHax8iloOYShpfjLsa3QO%2B63%2B8a8TwkS8UzKgjIhDW9HQmSBFWLtYY"
                >
                  Network System
                </a>
              </div>
            </div>
          </li>
          <li className="nav-item nav-dropdown group relative">
            <a className="nav-link inline-flex items-center" href="/Service">
              Services
              <svg className={`${isMobile || scrolled ? "hidden" : "h-4 w-4 fill-current"}`} viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
              </svg>
            </a>
            <div
              className={`${
                isMobile
                  ? "hidden"
                  : "w-max nav-dropdown-list hidden group-hover:block gap-2 sm:invisible sm:absolute sm:block sm:opacity-0 sm:group-hover:visible sm:group-hover:opacity-100 lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100"
              }`}
            >
              <div className="nav-dropdown-item">
                <a
                  className="nav-dropdown-link block"
                  href="/Service/U2FsdGVkX190j5KUmfzh6TCyPwULW9cvk65IDzTbIAI7Sc%2FMC5PRPGYhoUhlE79p"
                >
                  IT Relocation
                </a>
              </div>
              <div className="nav-dropdown-item">
                <a
                  className="nav-dropdown-link block"
                  href="/Service/U2FsdGVkX1%2FmTWvCbIwYLBvD2sy4SslOa4AWUOxKGwJe36eS9buOMqk2N0qhG5pd"
                >
                  Penetration Testing
                </a>
              </div>
              <div className="nav-dropdown-item">
                <a
                  className="nav-dropdown-link block"
                  href="/Service/U2FsdGVkX19xl1%2BcsDMleAQaABWjcpsK98eIoojjRbl1bF4kgVPm0uwxHChPyLl8"
                >
                  Managed Services
                </a>
              </div>
              <div className="nav-dropdown-item">
                <a
                  className="nav-dropdown-link block"
                  href="/Service/U2FsdGVkX1%2FANoRKAvyu35UxFaaFM6ieV8IugeIjQp8%2FR1uR%2BdE5%2Fhxy182LvAwJ"
                >
                  System Maintenance
                </a>
              </div>
              <div className="nav-dropdown-item">
                <a
                  className="nav-dropdown-link block"
                  href="/Service/U2FsdGVkX1%2FW64DZ5Y0remGWVrFcmnqH3uuHVlkQ%2FnKI4SRci7dzjcxGTQYVIkQX"
                >
                  System Integration
                </a>
              </div>
              <div className="nav-dropdown-item">
                <a
                  className="nav-dropdown-link block"
                  href="/Service/U2FsdGVkX1959h5Wo8hWkgl7qehmZ4IPdApgHNNL2Nwb%2FJqtm7tvICHnZBbEPPJn"
                >
                  IT Migration
                </a>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link block false" href="/blog">
              News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link block false" href="/contact">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link block false" href="/about">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link block false" href="/recruitment">
              Recruitment
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
