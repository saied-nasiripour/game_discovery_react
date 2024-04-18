import PropTypes from "prop-types";
import { FaStar, FaComment, FaFire } from "react-icons/fa";

function GamesByGenresId({gameList, selectedGenresName}) {

    // console.log("gameList: ", gameList);

    return (
        <div className="mt-5">
            <h2 className="font-bold text-[30px]">{selectedGenresName} Game</h2>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    gameList.map((item) => (
                        <div
                            key={item.id}
                            className="p-3 hover:scale-110 transition-all ease-in-out duration-300 rounded-lg bg-[#76a8f75e] pb-12 h-full cursor-pointer"
                        >
                            <img
                                src={item.background_image}
                                alt={item.slug}
                                className={"w-full h-[80%] rounded-xl object-cover"}
                            />
                            <h2 className="text-[20px] font-bold">
                                {item.name}<span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">{item.metacritic}</span>
                            </h2>
                            <div className="flex items-center">
                                <FaStar color={"yellow"}/>{item.rating}
                                <FaComment className="ml-3"/>{item.reviews_count}
                                <FaFire className="ml-3"/> {item.suggestions_count}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

GamesByGenresId.propTypes = {
    gameList: PropTypes.array.isRequired,
    selectedGenresName: PropTypes.string.isRequired
};

GamesByGenresId.defaultProps = {
    gameList: [],
    selectedGenresName: "Popular",
};

export default GamesByGenresId;