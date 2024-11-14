import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 w-full flex justify-center bg-white/0 z-30 transition-all ${
        isScrolled ? "navbar-scrolled" : ""
      }`}
    >
      <nav className="navbar container">
        <div className="order-0">
          <a className="navbar-brand inline-block" href="/">
            <img alt="Vrinnova" fetchpriority="high" width="180" height="120" src={logo} />
          </a>
        </div>
        <ul className="navbar-nav order-3">
          <li className="nav-item">
            <a className="nav-link block active" href="/">
              Home
            </a>
          </li>
          <li className="nav-item nav-dropdown group relative">
            <a className="nav-link inline-flex items-center" href="/Solution">
              Solutions
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
              </svg>
            </a>
            <div className="w-max nav-dropdown-list hidden group-hover:block gap-2 sm:invisible sm:absolute sm:block sm:opacity-0 sm:group-hover:visible sm:group-hover:opacity-100 lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100">
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
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
              </svg>
            </a>
            <div className="w-max nav-dropdown-list hidden group-hover:block gap-2 sm:invisible sm:absolute sm:block sm:opacity-0 sm:group-hover:visible sm:group-hover:opacity-100 lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100">
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
            <a className="nav-link block" href="/blog">
              News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link block" href="/contact">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link block" href="/about">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link block" href="/recruitment">
              Recruitment
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
