import React from "react";
import heroBg from "../assets/hero_bg.mp4";

function Hero() {
  return (
    <div className="h-screen flex flex-col">
      {/* Top Pink Section */}
      <div className="min-h-[350px] bg-[#FF6AC2] flex justify-center items-center px-6">
        <p className="text-center text-[2rem] font-[400] tracking-tight text-black leading-tight max-w-3xl pt-6">
          Solving Complex Problems with Elegant Code, Intuitive Interfaces, and
          Data-Driven Insights.
        </p>
      </div>

      {/* Section aligned with design */}
      <section className="flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-12 p-8">
          
          {/* Left Text Column */}
          <div className="text-center lg:text-left lg:w-1/2 animate-fade-in-up">
            <p className="text-[1.7rem] font-[400] tracking-tight text-black leading-tight max-w-3xl mb-8">
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

          {/* Right Image Column */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in-right">
            <img
              src="https://media.licdn.com/dms/image/v2/D5635AQGTRSpKOz8mUQ/profile-framedphoto-shrink_400_400/B56ZiVJFNgHkAc-/0/1754848843011?e=1755716400&v=beta&t=2YSh3Wj0lM4axGT2Sgq890f8c5oYFRPo2A513IkxQoQ"
              alt="Your Professional Photo"
              className="w-44 h-34 sm:w-80 sm:h-80 lg:w-66 lg:h-66 object-cover rounded-full shadow-xl transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
