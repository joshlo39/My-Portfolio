import React from "react";
import educationWebsite from "../assets/portfolio/Education_Website1.jpg";
import simpleCalc from "../assets/portfolio/simple_calc.png";
import javaPong from "../assets/portfolio/Java-Pong.png";
import installNode from "../assets/portfolio/installNode.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: educationWebsite,
      code: "https://github.com/joshlo39/Education-Website",
      demo: "https://pop-educationsite.netlify.app/"
    },
    {
      id: 2,
      src: simpleCalc,
      code: "https://github.com/joshlo39/Simple_Calc",
      demo: "https://simple-calc-bg.netlify.app",
    },
    {
      id: 3,
      src: javaPong,
      code: "https://github.com/joshlo39/Java-Pong-Game",
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,code,demo}) => (
            <div key={id} className="shadow-md shadow-blue-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-44 w-full"
              />
              <div className="flex items-center justify-center">

                <a href={demo} target="_blank" rel="noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-blue-500">
                  Demo
                </button>
                </a>

                <a href={code} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-blue-500">
                    Code
                  </button>
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;