import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Typography, Paper, Button, Box, Divider } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { makeStyles } from "@material-ui/core/styles";
import * as dateFns from "date-fns";
const useStyles = makeStyles((theme) => ({
  buttonSearch: {
    margin: theme.spacing(1),
    maxWidth: "40px",
    maxHeight: "40px",
    minWidth: "40px",
    minHeight: "40px",
    fontSize: 18,
    root: {
      backgroundColor: "#F2F3F8",
    },
  },
}));
export default function ShowItem(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box display="flex" justifyContent="left" flexDirection="row">
        <Box>
          <Button
            component={Link}
            to={`/episode?q=${props.episode.id}`}
            variant="contained"
            size="small"
            color="primary"
            className={classes.buttonSearch}
          >
            {props.episode.number}
          </Button>
        </Box>
        <Box flexDirection="column">
          <Box mt={1} fontWeight={600} color="primary.main">
            {props.episode.name}
          </Box>
          <Box display="flex" alignItems="center">
            <StarBorderIcon fontSize="small" color="primary" />
            <Box fontSize={10} ml={1} color="text.disabled">
              {props.rating}
            </Box>
            <Box mx={2} color="text.disabled">
              |
            </Box>
            <Box fontSize={10} color="text.disabled">
              {dateFns.format(
                dateFns.parse(props.episode.airdate, "yyyy-mm-dd", new Date()),
                "MMMM dd, yyyy"
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
