import React from "react";
import { SearchResult } from "../searchResult/SearchResult";

export const SearchResults = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <SearchResult result={result} />
      ))}
    </div>
  );
};
