import React, { useState } from "react";
import { Box } from "@material-ui/core";
import SearchBar from "./search-bar";
import ShowList from "./show-list";

function Search() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSearchClick = (searchTerm) => {
    setQuery(searchTerm);
  };
  const handleLoadingStatus = (status) => {
    setIsLoading(status);
  };

  return (
    <React.Fragment>
      <Box mt={2} display="flex" justifyContent="center">
        <SearchBar
          placeHolder="Search..."
          queryString="q"
          onSearchClick={handleSearchClick}
          isLoading={isLoading}
        />
      </Box>
      <Box mt={2} display="flex" justifyContent="center">
        <Box>
          <ShowList query={query} setLoadingStatus={handleLoadingStatus} />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Search;
