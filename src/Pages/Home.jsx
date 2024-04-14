import GenreList from "../Components/GenreList.jsx";

function Home() {
  return (
    <div className="grid grid-cols-4">
      <div className="hidden md:block">
        <GenreList />
      </div>
      <div className="col-span-4 md:col-span-3 bg-blue-400">Game List</div>
    </div>
  );
}
export default Home;
