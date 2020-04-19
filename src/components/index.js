import { Search } from "./Search";
import React from "react";
import SearchResults from "./searchResults/searchResultsContainer";

export default function () {
  return (
    <div>
      <Search onClick={(value) => console.log(value)} />
      <SearchResults />
    </div>
  );
}

//const apiKey = "nD0EoqcEjDebJXnhSatt9XPFHZgEhzua";
