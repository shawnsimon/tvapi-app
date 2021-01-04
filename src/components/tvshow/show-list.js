import { Fragment, useState, useEffect } from "react";
import ShowItem from "./show-item";
import { Box, Paper } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    margin: theme.spacing(5),
    backgroundColor: "#F2F3F8",
    minHeight: 200,
    minWidth: 840,
    maxWidth: 840,
  },
}));

export default function ShowList(props) {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    props.setLoadingStatus(isLoaded);
  }, [isLoaded, props]);

  useEffect(() => {
    setIsLoaded(false);
    fetch(`https://api.tvmaze.com/search/shows?q=${props.query}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
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
  }, [props.query]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <Box display="flex" flexDirection="row" px={5} mx={5}>
        <Box>
          <Paper className={classes.paper} elevation={0}>
            <Box display="flex" flexDirection="row">
              <Box pt={-7} mt={-7} pb={-7} mb={-7}>
                <Skeleton variant="rect" width={210} height={275} />
              </Box>
              <Box>
                <Box display="flex" flexDirection="column" pl={4} ml={4}>
                  <Skeleton variant="text" width={400} />
                  <Box pr={7} mr={7}>
                    <Skeleton variant="text" width={400} />
                  </Box>
                  <Box pt={1}>
                    <Skeleton variant="rect" width={40} height={25} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    );
  } else {
    return (
      <Fragment>
        {items.map((show, i) => (
          <ShowItem tvShow={show} key={i} />
        ))}
      </Fragment>
    );
  }
}
