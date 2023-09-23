import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <div className=" grid place-items-center ">
        <div className="wrappers">
          <h1 className="title  ">Online Book Store</h1>
        </div>
      </div>
      <nav className="w-full  bg-[#F65D4E] fixed top-10 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto  md:items-center md:flex md:px-8 ">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <a href="/">
                <h2 className="text-2xl text-cyan-600 font-bold ">LOGO</h2>
              </a>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <img
                      src="/src/img/close.svg"
                      width={30}
                      height={30}
                      alt="logo"
                    />
                  ) : (
                    <img
                      src="/src/img/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-[#fff] py-2 md:px-6 text-center border-b-2 md:border-b-0  md:hover:bg-transparent">
                  <Link to="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 text-xl text-[#fff] py-2 px-6 text-center  border-b-2 md:border-b-0   md:hover:bg-transparent">
                  <Link to="/books" onClick={() => setNavbar(!navbar)}>
                    Books
                  </Link>
                </li>
                <li className="pb-6 text-xl text-[#fff] py-2 px-6 text-center  border-b-2 md:border-b-0   md:hover:bg-transparent">
                  <Link to="/blogs" onClick={() => setNavbar(!navbar)}>
                    Blogs
                  </Link>
                </li>
                <li className="pb-6 text-xl text-[#fff] py-2 px-6 text-center  border-b-2 md:border-b-0  md:hover:bg-transparent">
                  <Link to="/about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-xl text-[#fff] py-2 px-6 text-center  border-b-2 md:border-b-0  md:hover:bg-transparent">
                  <Link to="/contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
