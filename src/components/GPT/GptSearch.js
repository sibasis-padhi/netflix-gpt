import { BG_URL } from "../../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover w-screen"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </>
  );
};

export default GptSearch;
