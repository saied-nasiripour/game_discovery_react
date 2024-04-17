import GenreList from "../Components/GenreList.jsx";
import Banner from "../Components/Banner.jsx";
import {useEffect, useState} from "react";
import GlobalAPi from "../Services/GlobalAPi.jsx";
import Spinner from "../Components/Spinner.jsx";
import TrendingGames from "../Components/TrendingGames.jsx";
import GamesByGenresId from "../Components/GamesByGenresId.jsx";

function Home() {

    const [allGameList, setAllGameList] = useState([]);
    const [gameListByGenreId, setGameListByGenreId] = useState([]);
    const [selectedGenresName, setSelectedGenresName] = useState("Action");

    useEffect(
        () => {
            getAllGamesList();
            getGameListByGenreId(4);
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

    const getGameListByGenreId = (id) => {
        GlobalAPi.getGameListById(id).then(
            (response) => {
                console.log("GenreId: ", id);
                setGameListByGenreId(response.data.results);
            }
        );
    };

    return (
        <div className="grid grid-cols-4">
            <div className="hidden md:block">
                <GenreList genreId={(genreId)=>getGameListByGenreId(genreId)}
                           selectedGenresName={(name) => setSelectedGenresName(name)}
                />
            </div>
            <div className="col-span-4 md:col-span-3">
                {
                    allGameList?.length > 0 && gameListByGenreId.length > 0
                        ? <div>
                            <Banner gameBanner={allGameList[0]}/>
                            <TrendingGames gameList={allGameList}/>
                            <GamesByGenresId
                                gameList={gameListByGenreId}
                                selectedGenresName={selectedGenresName}
                            />
                        </div>
                        : null/*<div className="flex justify-center items-center h-full w-full"><Spinner/></div>*/
                }
            </div>
        </div>
    );
}

export default Home;
