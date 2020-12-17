import React from "react";
import { Link } from "react-router-dom";
import ImageMedium from "./image-medium";
import { Typography, Paper, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    margin: theme.spacing(5),
    backgroundColor: "#F2F3F8",
    //minHeight: 180,
    minWidth: 840,
    maxWidth: 840,
  },
}));

export default function ShowItem(props) {
  const classes = useStyles();
  const getSummary = (summary) => {
    if (summary == null) {
      return "";
    }
    var maxLength = 280; // maximum number of characters to extract
    summary = summary.replace(/(<([^>]+)>)/gi, "");
    let trimmedString = summary;
    //Trim and re-trim only when necessary (prevent re-trim when string is shorted than maxLength, it causes last word cut)
    if (summary.length > maxLength) {
      //trim the string to the maximum length
      trimmedString = summary.substr(0, maxLength);
      //re-trim if we are in the middle of a word and
      trimmedString =
        trimmedString.substr(
          0,
          Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
        ) + "...";
    }
    return trimmedString;
  };

  return (
    <Box display="flex" flexDirection="row" px={5} mx={5}>
      <Box>
        <Paper className={classes.paper} elevation={0}>
          <Box display="flex" flexDirection="row">
            <Box mt={-7} mb={-7.5}>
              <ImageMedium
                imageObject={props.tvShow.show.image}
                altText={props.tvShow.show.name}
              />
            </Box>
            <Box>
              <Box display="flex" height={"100%"} flexDirection="column" pl={8}>
                <Typography variant="h5" color="primary">
                  {props.tvShow.show.name}
                </Typography>
                <Box pr={14} mt={1} height="100%">
                  <Typography variant="body1" gutterBottom>
                    {getSummary(props.tvShow.show.summary)}
                  </Typography>
                </Box>
                <Box pt={1}>
                  <Button
                    component={Link}
                    to={`/episodes?sid=${props.tvShow.show.id}`}
                    variant="contained"
                    size="small"
                    color="primary"
                    className={classes.buttonSearch}
                  >
                    Show Episodes
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
