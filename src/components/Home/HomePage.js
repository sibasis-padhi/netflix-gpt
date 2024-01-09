import { useSelector } from "react-redux";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../hooks/usePopularMovies";
import Header from "../UI/Navigation/Header";
import Banner from "./Banner";
import Body from "./Body";
import GptSearch from "../GPT/GptSearch";

const HomePage = () => {
  const showGptSearchView = useSelector((state) => state.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <>
      <Header />
      {showGptSearchView ? (
        <GptSearch />
      ) : (
        <>
          <Banner />
          <Body />
        </>
      )}
    </>
  );
};

export default HomePage;
