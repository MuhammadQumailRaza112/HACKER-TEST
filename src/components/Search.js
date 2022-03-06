import React, { useRef } from "react";

function Search({ setSearch }) {
  const ref = useRef();

  return (
    <section className="layout-row justify-content-center mb-40">
      <input
        ref={ref}
        type="text"
        placeholder="Search for movie by name"
        className="w-75 py-2"
        data-testid="search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </section>
  );
}

export default Search;
