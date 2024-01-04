import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import Header from "../UI/Navigation/Header";

const HomePage = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
    </div>
  );
};

export default HomePage;
