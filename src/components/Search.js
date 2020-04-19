import React, { useRef } from "react";

export const Search = ({ onClick }) => {
  const input = useRef("");

  const submitIt = (e) => {
    e.preventDefault();
    onClick(input.current.value);
  };

  return (
    <form onSubmit={submitIt}>
      <input ref={input} type="text" placeholder="Find me giphys..." />
      <input
        type="button"
        value="Search"
        onClick={() => onClick(input.current.value)}
      />
    </form>
  );
};
