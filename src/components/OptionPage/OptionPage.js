import React from "react";
import { Outlet, useLocation, useResolvedPath } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Background from "../Background/Background";
import "./OptionPage.css";

const OptionPage = ({ label, description, subOptions }) => {
  const location = useLocation();
  const resolvedPath = useResolvedPath("");

  const isCurrentPath = location.pathname === resolvedPath.pathname;

  const navigate = useNavigate();

  return (
    <Background className="home-hero">
      {isCurrentPath && (
        <>
          <div>
            <div className="container text-center mt-14 text-3xl">
              <div className="rounded-2xl bg-gradient-to-b from-body to-theme-light px-8 py-14">
                <h1>{label}</h1>
              </div>
            </div>
            {description && (
              <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                <div className="text-center">
                  <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">{description}</h1>
                </div>
              </div>
            )}
            <div>
              <div className="container mt-14 mb-14">
                <div className="content">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
                    {subOptions &&
                      subOptions.map((subOption, index) => (
                        <div key={index} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                          <span>
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                              {subOption.label} {}
                            </h5>
                          </span>
                          <p className="mb-3 font-normal text-gray-500 line-clamp-5">
                            {subOption.description} {}
                          </p>
                          <a
                            className="inline-flex items-center text-blue-600 hover:underline"
                            href={subOption.path}
                            onClick={(e) => {
                              e.preventDefault();
                              navigate(subOption.path);
                            }}
                          >
                            See more
                            <svg
                              className="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <Outlet />
    </Background>
  );
};

export default OptionPage;
