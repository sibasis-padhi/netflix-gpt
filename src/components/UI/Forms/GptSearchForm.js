import { useRef } from "react";
import lang from "../../../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchForm = (handleGptSearchClick) => {
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);

  return (
    <form
      className="w-full md:w-1/2 bg-black grid grid-cols-12"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={searchText}
        type="text"
        className=" p-4 m-4 col-span-9"
        placeholder={lang[langKey].gptSearchPlaceholder}
      />
      <button
        className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        onClick={handleGptSearchClick}
      >
        {lang[langKey].search}
      </button>
    </form>
  );
};

export default GptSearchForm;
