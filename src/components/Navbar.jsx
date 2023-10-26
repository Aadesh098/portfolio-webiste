import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import resume from "../assets/Aadesh_Resume.pdf"
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Aadesh &nbsp;
            <span className="lg:block hidden"> | CSE , Thapar University</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-9">
  {navLinks.map((nav) => (
    // Assuming you're using Tailwind CSS, you can use the 'md:hidden' class to hide the 'college' item below the 'md' breakpoint
    <li
      key={nav.id}
      className={`${
        active === nav.title ? 'text-white' : 'text-secondary'
      } hover:text-white text-[18px] font-medium cursor-pointer ${
        nav.id === 'college' ? 'max-md:hidden' : ''
      }`}
      onClick={() => setActive(nav.title)}
    >
      {nav.id === 'resume' ? (
        <a href={resume} download="resume.pdf">
          {nav.title}
        </a>
      ) : (
        <a href={`#${nav.id}`}>{nav.title}</a>
      )}
    </li>
  ))}
</ul>



        <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl cursor-pointer`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4 cursor-pointer">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
