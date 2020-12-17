import React, { useState, useEffect } from "react";
import { Typography, Paper, Button, Box } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "./search-bar";
import EpisodeList from "./episode-list";
import ImageMedium from "./image-medium";

const useStyles = makeStyles((theme) => ({
  paper: {},
}));
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default function Episodes(props) {
  const classes = useStyles();
  const query = useQuery();
  const showId = query.get("sid");

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({});

  useEffect(() => {
    fetch(`http://api.tvmaze.com/shows/${showId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
          console.log(result);
          setIsLoaded(true);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [showId]);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <React.Fragment>
        <Box mt={2} display="flex" justifyContent="center">
          {/* <SearchBar placeHolder="search show title..." queryString="e" /> */}
        </Box>
        <Box mt={2} ml={3} display="flex" flexDirection="row">
          <Box>
            <Box>
              <ImageMedium imageObject={items.image} altText={items.name} />
            </Box>
            <Box>
              <Box fontWeight={600} fontSize={18} color="primary.main">
                {items.name}
              </Box>
              <Box width={210} fontSize={10} color="text.disabled">
                {items.summary.replace(/(<([^>]+)>)/gi, "")}
              </Box>
              <Box>Creator</Box>
              <Box>Starring</Box>
            </Box>
          </Box>
          <Box pl={4}>
            <EpisodeList rating={items.rating.average} />
          </Box>
        </Box>
      </React.Fragment>
    );
  }
}
