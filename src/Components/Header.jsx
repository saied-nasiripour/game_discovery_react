import { useContext } from "react";
import logo from "./../assets/Images/logo.png";
import { HiOutlineMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext.jsx";
import { ToggleMenuContext } from "../Context/ToggleMenuContext.jsx";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { isClick, setIsClick } = useContext(ToggleMenuContext);

  const toggleMenu = () => {
    setIsClick((clicked) => !clicked);
  };

  return (
    <div className="flex items-center justify-between p-3 w-full">
      {/*First column for the image*/}
      <div className="hidden md:block flex-shrink-0">
        <img className="h-15 w-15" src={logo} alt="logo" />{" "}
        {/* <!-- 60x60px image -->*/}
      </div>
      <div className="md:hidden flex-shrink-0 items-center">
        <button
          className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset dark:bg-white"
          onClick={toggleMenu}
        >
          {isClick ? (
            <svg
              className="h-6 w-6 text-white dark:text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 text-white dark:text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      {/*Second column for the search box*/}
      <div className="flex flex-grow bg-slate-200 p-2 mx-4 rounded-full items-center">
        <div className="items-center justify-center p-2">
          <HiOutlineMagnifyingGlass />
        </div>
        <input
          type="text"
          placeholder="Search Games"
          className="w-full px-2 bg-transparent outline-none text-black"
        />
      </div>
      {/*Third column for the theme switcher*/}
      <div className="flex-shrink-0">
        {theme === "" ? (
          <HiMoon
            className="w-9 h-9 bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            /*onClick={() => setToggle(false)}*/
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiSun
            className="w-9 h-9 bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            /*onClick={() => setToggle(true)}*/
            onClick={() => {
              setTheme("");
              localStorage.setItem("theme", "");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
