import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Hero() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector('.bg-\\[\\#FF6AC2\\]');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  return (
    <div className="md:h-screen lg:max-h-fit flex flex-col overflow-hidden relative " style={{ top: `${navbarHeight}px` }}>

      {/* Top Pink Section */}
      <div className=" h-[250px] bg-[#FF6AC2] flex justify-center items-center px-6">

        <p className="text-center text-3xl sm:text-4xl font-[400] tracking-tight text-black leading-tight max-w-3xl pt-6">
          Solving Complex Problems with Elegant Code, Intuitive Interfaces, and
          Data-Driven Insights.
        </p>
      </div>
      {/* Section aligned with design */}
      <section className="h-[50vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative">

        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-12 p-8">

          {/* Left Text Column */}
          <div className="text-center lg:text-left lg:w-1/2 animate-fade-in-up">

            <p className="text-2xl sm:text-3.4xl  font-[400] tracking-tight text-black leading-tight max-w-3xl mb-8">

              I'm passionate about crafting efficient algorithms, building
              beautiful web experiences, and extracting actionable intelligence
              from data.
            </p>
            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">

              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out shadow-lg"
              >

                View My Projects
              </a>
              <a
                href="#about"
                className="bg-white border border-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out shadow-md"
              >

                Learn More About Me
              </a>
            </div>
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6 text-gray-600">

              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition duration-300 rounded-lg"
              >

                LinkedIn
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition duration-300 rounded-lg"
              >

                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="absolute w-[400px] right-[10%] top-[0px] z-[-1] ">

          <img
            src="https://openlabs.edu.gh/courses/images/full-stack-program.png"
            className="w-full h-full object-cover hidden md:block"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}
export default Hero;
