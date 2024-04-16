import axios from "axios";

const apiKey = "18d8dc115d954615a6fe8522598e8a97";

const axiosCreate = axios.create({
    baseURL: 'https://api.rawg.io/api'
});

const getGenreList = axiosCreate.get('/genres?key='+apiKey);
const getAllGames = axiosCreate.get('/games?key='+apiKey);
const getGameListById = (id) => axiosCreate.get('/games?key='+apiKey+'&genres='+id);

export default {
    getGenreList,
    getAllGames,
    getGameListById
}
