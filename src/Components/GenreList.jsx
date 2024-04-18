import GlobalAPi from "../Services/GlobalAPi.jsx";
import {useEffect, useState, useContext} from "react";
import PropTypes from "prop-types";
import {ToggleMenuContext} from "../Context/ToggleMenuContext.jsx";


export default function GenreList({ genreId, selectedGenresName }) {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const { isClick} = useContext(ToggleMenuContext);

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalAPi.getGenreList.then((response) => {
      const results = response.data.results;
      // console.log("status code: ", response.status);
      // console.log("response data: ", results);
      setGenreList(results);
    });
  };


  return (
      <>
        <div className="hidden md:block">
          <h2 className="text-[30px] font-bold dark:text-white">Genres</h2>
          {genreList.map((item, index) => (
              <div
                  key={item.id}
                  onClick={() => {
                    setActiveIndex(index);
                    genreId(item.id);
                    selectedGenresName(item.name);
                  }}
                  className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 hover:dark:bg-gray-600 p-2 rounded-lg group ${
                      activeIndex === index ? "bg-gray-300 dark:bg-gray-600" : null
                  }`}
              >
                <img
                    src={item.image_background}
                    alt={item.name}
                    className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-110 transition-all duration-500 ease-out ${
                        activeIndex === index ? "scale-110" : null
                    }`}
                />
                <h3
                    className={`dark:text-white text-[18px] group-hover:font-bold transition-all duration-500 ease-out ${
                        activeIndex === index ? "font-bold" : null
                    }`}
                >
                  {item.name}
                </h3>
              </div>
          ))}
        </div>
        {
          isClick && (
                <div className="block md:hidden">
                  <h2 className="text-[30px] font-bold dark:text-white">Genres</h2>
                  {genreList.map((item, index) => (
                      <div
                          key={item.id}
                          onClick={() => {
                            setActiveIndex(index);
                            genreId(item.id);
                            selectedGenresName(item.name);
                          }}
                          className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 hover:dark:bg-gray-600 p-2 rounded-lg group ${
                              activeIndex === index ? "bg-gray-300 dark:bg-gray-600" : null
                          }`}
                      >
                        <img
                            src={item.image_background}
                            alt={item.name}
                            className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-110 transition-all duration-500 ease-out ${
                                activeIndex === index ? "scale-110" : null
                            }`}
                        />
                        <h3
                            className={`dark:text-white text-[18px] group-hover:font-bold transition-all duration-500 ease-out ${
                                activeIndex === index ? "font-bold" : null
                            }`}
                        >
                          {item.name}
                        </h3>
                      </div>
                  ))}
                </div>
            )
        }
      </>
  );
}

GenreList.propTypes = {
  genreId: PropTypes.func.isRequired,
  selectedGenresName: PropTypes.func.isRequired
};
