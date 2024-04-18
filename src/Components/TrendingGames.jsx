export function TrendingGames({gameList}) {

/*    useEffect(
        () => {
            console.log(gameList);
        },
        []
    );*/

    return (
        <div className="hidden sm:block mt-10">
            <h2 className="font-bold text-[30px]">Trending Games</h2>
            <div className="gap-4 mt-5 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    gameList.map(
                        (game, index) => index < 4 && (
                            <div
                                key={game.id}
                                className="bg-[#76a8f75e] rounded-lg overflow-hidden group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
                            >
                                <img
                                    src={game.background_image}
                                    alt={game.name}
                                    className={"h-[270px] object-cover"}
                                />
                                <h2 className="my-1 mx-2 p2 text-[18px] font-bold">{game.name}</h2>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

import PropTypes from "prop-types";


import {useEffect} from "react";

TrendingGames.propTypes = {
    gameList: PropTypes.array.isRequired
};

TrendingGames.defaultProps = {
    gameList: []
};

export default TrendingGames;