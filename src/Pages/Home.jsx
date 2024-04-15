import GenreList from "../Components/GenreList.jsx";
import Banner from "../Components/Banner.jsx";
import {useEffect, useState} from "react";
import GlobalAPi from "../Services/GlobalAPi.jsx";

function Home() {

    const [allGameList, setAllGameList] = useState();

    useEffect(
        ()=>{
            getAllGamesList();
        },
        []
    );

    const getAllGamesList = () => {
        GlobalAPi.getAllGames.then(
            (response)=>{
                // console.log(response.data.results);
                setAllGameList(response.data.results);
            }
        );
    };

  return (
    <div className="grid grid-cols-4">
      <div className="hidden md:block">
        <GenreList />
      </div>
      <div className="col-span-4 md:col-span-3">
          <Banner/>
      </div>
    </div>
  );
}
export default Home;
