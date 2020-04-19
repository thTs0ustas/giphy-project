import React from "react";
//import { SearchResulting } from "../../customTypes/customTypes";

export const SearchResult = ({ result: { thumbnail } }) => {
  return <img src={thumbnail} alt="thumbnail" />;
};

/* SearchResult.propTypes = {
  result: SearchResulting.SearchResult.isRequired,
}; */
