import axios from "axios";

const apiKey = "18d8dc115d954615a6fe8522598e8a97";

const axiosCreate = axios.create({
    baseURL: 'https://api.rawg.io/api'
});

const getGenreList = axiosCreate.get('/genres?key='+apiKey);

export default {
    getGenreList
}