import {useEffect, useState} from "react";
import "./App.css";
import Home from "./Pages/Home.jsx";
import Header from "./Components/Header.jsx";
import {ThemeContext} from "./Context/ThemeContext.jsx";

function App() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        if (localStorage.getItem("theme") === null) {
            setTheme("dark");
        } else {
            setTheme(localStorage.getItem("theme"));
        }
    }, []);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div
                className={`${theme} ${
                    theme == "dark" ? "bg-[#121212]" : null
                } w-full min-h-[100vh]`}
            >
                <div className="bg-white dark:bg-[#121212]">
                    <div className="max-w-7xl mx-auto">
                        <Header/>
                        <Home/>
                    </div>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
