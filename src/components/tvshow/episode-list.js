import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Typography, Paper, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EpisodeItem from "./episode-item";
const useStyles = makeStyles((theme) => ({
  root: {},
}));

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function EpisodeList(props) {
  const classes = useStyles();
  const query = useQuery();
  const showId = query.get("sid");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`http://api.tvmaze.com/shows/${showId}/episodes`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
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
        <div>
          {items.map((episode, i) => (
            <EpisodeItem episode={episode} rating={props.rating} key={i} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
