import GenreList from "../Components/GenreList.jsx";
import Banner from "../Components/Banner.jsx";
import {useEffect, useState} from "react";
import GlobalAPi from "../Services/GlobalAPi.jsx";
import Spinner from "../Components/Spinner.jsx";
import TrendingGames from "../Components/TrendingGames.jsx";

function Home() {

    const [allGameList, setAllGameList] = useState([]);

    useEffect(
        () => {
            getAllGamesList();
        },
        []
    );

    const getAllGamesList = () => {
        GlobalAPi.getAllGames.then(
            (response) => {
                // console.log(response.data.results);
                setAllGameList(response.data.results);
            }
        );
    };

    return (
        <div className="grid grid-cols-4">
            <div className="hidden md:block">
                <GenreList/>
            </div>
            <div className="col-span-4 md:col-span-3">
                {
                    allGameList?.length > 0
                        ? <div>
                            <Banner gameBanner={allGameList[0]}/>
                            <TrendingGames gameList={allGameList}/>
                    </div>
                        : null/*<div className="flex justify-center items-center h-full w-full"><Spinner/></div>*/
                }
            </div>
        </div>
    );
}

export default Home;
