import React from "react";
import { NavLink } from "react-router-dom";
import linkedinLogo from "../assets/linkedin_logo.svg";
import githubLogo from "../assets/github_logo.svg";
import leetcodeLogo from "../assets/leetcode_logo.svg";


function Navbar() {
  const links = ["About", "Skills", "Projects", "Contact"];

  const socialLinks = [
    { icon: linkedinLogo, url: "https://www.linkedin.com/in/yourprofile" },
    { icon: githubLogo, url: "https://github.com/yourusername" },
    { icon: leetcodeLogo, url: "https://leetcode.com/yourusername" },
  ];

  return (
    <div className="bg-[#FF6AC2] w-full fixed">
      {/* navbar wrapper */}
      <div className="navbar-wrapper px-20 w-full flex justify-between items-center py-6">
        
        {/* Navigation Links (Left side) */}
        <div className="flex gap-5">
          {links.map((link) => (
            <NavLink
              key={link}
              to={`/${link.toLowerCase()}`}
              className={({ isActive }) =>
                `heading text-[1.3rem] tracking-[-0.5px] font-[550] text-black leading-tight ${
                  isActive ? "underline" : ""
                }`
              }
            >
              {link}
            </NavLink>
          ))}
        </div>

        {/* Logo (Center) */}
        <div className="flex items-center gap-2">
          {/* If you have a logo file, uncomment below */}
          {/* <img src={googleLabsIcon} alt="Google Labs" className="w-6 h-6" /> */}
          <h1 className="heading text-[1.8rem] tracking-tighter font-[550] text-black leading-tight relative left-[-100%]">
            Lucky.ali
          </h1>
        </div>

        {/* Social Links + Close Button (Right side) */}
        <div className="flex gap-4 items-center">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={social.icon}
                alt="social-icon"
                className="w-5 h-5 hover:scale-110 transition-transform"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
