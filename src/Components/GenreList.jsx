import GlobalAPi from "../Services/GlobalAPi.jsx";
import {useEffect} from "react";

export default function GenreList() {

    useEffect(
        ()=>{
            getGenreList();
        },
        []
    );

    const getGenreList = () => {
        GlobalAPi.getGenreList.then(
            (response) => {
                console.log("status code: ", response.status,"\nresponse data: ", response.data.results);
            }
        );
    };

    return (
        <>GenreList</>
    )
}