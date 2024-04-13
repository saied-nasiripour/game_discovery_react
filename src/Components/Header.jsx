import {useContext} from "react";
import logo from './../assets/Images/logo.png';
import {HiOutlineMagnifyingGlass, HiMoon, HiSun} from "react-icons/hi2"
import {ThemeContext} from "../Context/ThemeContext.jsx";

function Header() {
    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <div className="flex items-center justify-between p-3 w-full">
            {/*First column for the image*/}
            <div className="flex-shrink-0">
                <img className="h-15 w-15" src={logo} alt="logo"/> {/* <!-- 60x60px image -->*/}
            </div>
            {/*Second column for the search box*/}
            <div className='flex flex-grow bg-slate-200 p-2 mx-4 rounded-full items-center'>
                <div className="items-center justify-center p-2">
                    <HiOutlineMagnifyingGlass/>
                </div>
                <input
                    type='text'
                    placeholder="Search Games"
                    className='w-full px-2 bg-transparent outline-none text-black'/>
            </div>
            {/*Third column for the theme switcher*/}
            <div className='flex-shrink-0'>
                {
                    theme === ""
                    ? <HiMoon
                            className="w-9 h-9 bg-slate-200 text-black p-1 rounded-full cursor-pointer"
                            /*onClick={() => setToggle(false)}*/
                            onClick={() => {
                                setTheme("dark");
                                localStorage.setItem("theme", "dark");
                            }}
                        />
                    : <HiSun
                            className="w-9 h-9 bg-slate-200 text-black p-1 rounded-full cursor-pointer"
                            /*onClick={() => setToggle(true)}*/
                            onClick={() => {
                                setTheme("");
                                localStorage.setItem("theme", "");
                            }}
                        />
                }
            </div>
        </div>
    )
}
export default Header;