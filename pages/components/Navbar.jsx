import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleNav = () => {
    if (isHidden) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };

  return (
    <nav className=" items-center border-b-2 rounded-b-xl  ">
      <div className=" flex justify-between items-center p-2 ">
        <div
          className="flex items-center ml-5 group cursor-pointer"
          onClick={isHidden ? null : toggleNav}
        >
          <Link href="/">
            <a className="flex items-center p-2 group ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500 transform group-hover:scale-125 transition duration-700 ease-in-out"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <span className="font-bold ">TradeVeer</span>
            </a>
          </Link>
        </div>

        <div className="hidden md:flex justify-between items-center uppercase">
          <div className="flex justify-between items-center space-x-1">
            <Link href="/">
              <a className="py-5 px-3 text-gray-700 font-medium hover:text-blue-400">
                HOME
              </a>
            </Link>
            <Link href="/Crypto">
              <a className="py-5 px-3 text-gray-700 font-medium hover:text-blue-400">
                Crypto
              </a>
            </Link>
            <Link href="/Forex">
              <a className="py-5 px-3 text-gray-700 font-medium hover:text-blue-400">
                Forex
              </a>
            </Link>
            <Link href="/Blogs">
              <a className="py-5 px-3 text-gray-700 font-medium hover:text-blue-400">
                BLOGS
              </a>
            </Link>
          </div>

          <Link href="/Authorisation">
            <button
              className="bg-indigo-600 px-5 py-1 rounded-3xl text-white font-semibold ml-8"
              type="submit"
            >
              <a onClick={toggleNav}> SIGN IN</a>
            </button>
          </Link>
        </div>

        <div className="md:hidden">
          <button
            className="cursor-pointer transform hover:scale-110 transition duration-500 ease-in-out"
            onClick={toggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={
          isHidden
            ? "hidden"
            : "md:hidden flex flex-col justify-center items-center bg-indigo-600 w-full text-white py-2 top-full transform transition duration-2000 ease-in-out"
        }
      >
        <Link href="/">
          <a
            onClick={toggleNav}
            className="py-4 w-full text-center border-b border-blue-100 uppercase font-semibold  transition duration-5000 ease-out"
          >
            home
          </a>
        </Link>
        <Link href="/Crypto">
          <a
            onClick={toggleNav}
            className="py-4 w-full text-center border-b border-blue-100 uppercase font-semibold  transition duration-5000 ease-out"
          >
            crypto
          </a>
        </Link>
        <Link href="/Forex">
          <a
            onClick={toggleNav}
            className="py-4 w-full text-center border-b border-blue-100 uppercase font-semibold  transition duration-5000 ease-out  "
          >
            {" "}
            forex
          </a>
        </Link>
        <Link href="/Blogs">
          <a
            onClick={toggleNav}
            className="py-4 w-full text-center border-b border-blue-100 uppercase font-semibold  transition duration-5000 ease-out  "
          >
            {" "}
            blogs
          </a>
        </Link>
        <Link href="/Authorisation">
          <button
            className="bg-white px-5 py-1 rounded-3xl text-black font-semibold mt-5 mb-5 w-2xl  transition duration-5000 ease-out"
            type="submit"
          >
            <a onClick={toggleNav}> SIGN IN</a>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
