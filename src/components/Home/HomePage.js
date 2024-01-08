import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../hooks/usePopularMovies";
import Header from "../UI/Navigation/Header";
import Banner from "./Banner";
import Body from "./Body";

const HomePage = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <>
      <Header />
      <Banner />
      <Body />
    </>
  );
};

export default HomePage;
