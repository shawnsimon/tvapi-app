import React, { useState } from "react";
import { Box } from "@material-ui/core";
import SearchBar from "./search-bar";
import ShowList from "./show-list";

function Search() {
  const [query, setQuery] = useState("");
  const handleSearchClick = (searchTerm) => {
    setQuery(searchTerm);
  };

  //

  return (
    <React.Fragment>
      <Box mt={2} display="flex" justifyContent="center">
        <SearchBar
          placeHolder="Search..."
          queryString="q"
          onSearchClick={handleSearchClick}
        />
      </Box>
      <Box mt={2} display="flex" justifyContent="center">
        <Box>
          <ShowList query={query} />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Search;
