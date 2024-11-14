import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className="footer bg-theme-light">
      <div className="container">
        <div className="row items-center py-2">
          <div className="w-fit max-w-screen-xl content-end">
            <div className="grid grid-cols-12 gap-5 px-4 py-6 lg:py-8 md:grid-cols-12 content-end">
              <div className="col-span-12 md:col-span-3 flex justify-center items-center">
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <a className="navbar-brand inline-block max-w-xs" href="/">
                      <img alt="" loading="lazy" width="300" height="200" decoding="async" data-nimg="1" src={logo} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-12 md:col-span-3 flex flex-col justify-center items-center">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Menu</h2>
                <ul className="text-gray-500 font-medium grid grid-cols-2 gap-2 max-w-fit">
                  <li>
                    <a className="hover:underline" href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="/Solution">
                      Solutions
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="/Service">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="/blog">
                      News
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="/contact">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="/about">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="/recruitment">
                      Recruitment
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-12 md:col-span-3 flex flex-col justify-center items-center">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Contact</h2>
                <ul className="text-gray-500 font-medium max-w-fit">
                  <li className="flex">
                    <svg
                      className="h-5 w-5 mt-2 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                    >
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                    </svg>
                    <ul className="ml-2">
                      <li>(+84) 28 3821 6684</li>
                      <li>(+84) 28 3821 6688</li>
                      <li>Hotline 24/7: 0888 827 927</li>
                    </ul>
                  </li>
                  <li className="flex">
                    <svg
                      className="h-5 w-5 mt-2 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                    >
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                      <polyline points="3 7 12 13 21 7"></polyline>
                    </svg>
                    <span className="ml-2">info@lp.com.vn</span>
                  </li>
                </ul>
              </div>
              <div className="col-span-12 md:col-span-3 flex flex-col justify-center items-center">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Address</h2>
                <ul className="text-gray-500 font-medium max-w-fit">
                  <li className="flex">
                    <svg className="h-5 w-10 mt-2 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="ml-2">
                      <a
                        className="hover:underline"
                        target="_blank"
                        href="https://goo.gl/maps/C19MdaFJBp6oLisV7"
                        rel="noreferrer"
                      >
                        AS Building, 236-238 Nguyen Cong Tru Street, Nguyen Thai Binh Ward, District 1, HCMC
                      </a>
                    </span>
                  </li>
                  <li className="flex">
                    <a className="hover:underline flex" href="https://www.facebook.com/LienPhatTechnologyCorporation">
                      <svg
                        className="h-5 w-5 mt-2 text-black"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                      >
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                      </svg>
                      <span className="ml-2"> Vrinnova Technologies Private Limited</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-7">
        <div className="container text-center text-light">
          <p>Copyright © 2024 Vrinnova Technologies Private Limited. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
