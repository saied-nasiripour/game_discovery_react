import PropTypes from "prop-types";

function GamesByGenresId({gameList}) {

    console.log("gameList: ", gameList);

    return (
        <></>
    )
}

GamesByGenresId.propTypes = {
    gameList: PropTypes.array.isRequired
};

GamesByGenresId.defaultProps = {
    gameList: []
};

export default GamesByGenresId;