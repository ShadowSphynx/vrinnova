import React from "react";
import "./SubOptionPage.css";

const SubOptionPage = ({ header, description }) => {
  const isIntroduction = header === "Introduction";
  const isCoreValues = header === "Our Core Values";

  return (
    <div>
      <div className="container text-center text-4xl">
        <div className="rounded-2xl bg-gradient-to-b from-body to-theme-light px-8 py-14">
          <h1>{header}</h1>
        </div>
      </div>
      <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-50 lg:mr-60 lg:ml-60 sm:mr-12 sm:ml-12">
        <div className="text-center">
          <h1 className="text-white text-xl md:text-3xl">{description}</h1>
        </div>
      </div>

      {isIntroduction && (
        <div>
          <div className="container text-center text-4xl">
            <div className="rounded-2xl bg-gradient-to-b from-body to-theme-light px-8 py-14">
              <h1>Why Vrinnova?</h1>
            </div>
          </div>
          <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-50 lg:mr-60 lg:ml-60 sm:mr-12 sm:ml-12">
            <div className="text-center">
              <h1 className="text-white text-xl md:text-3xl">
                We pride ourselves on our unwavering commitment to IT excellence, backed by a wealth of experience and a
                focus on customer satisfaction. Our team of experts understands the unique challenges faced by
                businesses today. We leverage the latest technologies to create tailored solutions that drive success
                and foster growth.
              </h1>
            </div>
          </div>
        </div>
      )}

      {isCoreValues && (
        <div className="container mt-14 mb-14">
          <div className="content">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                <span>
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Customer First
                  </h5>
                </span>
                <p className="mb-3 font-normal text-gray-500 line-clamp-5">
                  We prioritize customer satisfaction and strive to exceed their expectations in all interactions.
                </p>
              </div>
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                <span>
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Commitment to Excellence
                  </h5>
                </span>
                <p className="mb-3 font-normal text-gray-500 line-clamp-5">
                  We are dedicated to delivering high-quality products and services through hard work, focus, and
                  perseverance.
                </p>
              </div>
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                <span>
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Transparency
                  </h5>
                </span>
                <p className="mb-3 font-normal text-gray-500 line-clamp-5">
                  We believe in open communication, honesty, and accountability in all dealings with customers,
                  employees, and stakeholders.
                </p>
              </div>
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                <span>
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Integrity
                  </h5>
                </span>
                <p className="mb-3 font-normal text-gray-500 line-clamp-5">
                  We uphold the highest ethical standards, demonstrating honesty, fairness, and trustworthiness in all
                  our actions and decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubOptionPage;
