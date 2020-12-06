import React from "react";
import ImageMedium from "./image-medium";
import { Typography, Paper, Button, Box } from "@material-ui/core";
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

export default function ShowItem(props) {
  const classes = useStyles();
  const getSummary = (summary) => {
    if (summary != null && summary.length > 280) {
      return summary.substring(0, 280) + "...";
    }
    return summary;
  };
  const handleShowEpisodes = () => {
    //navigate to the episodes
  };
  return (
    <Box display="flex" flexDirection="row" px={5} mx={5}>
      <Box>
        <Paper className={classes.paper} elevation={0}>
          <Box display="flex" flexDirection="row">
            <Box pt={-7} mt={-7} pb={-7} mb={-7}>
              <ImageMedium
                imageObject={props.tvShow.show.image}
                altText={props.tvShow.show.name}
              />
            </Box>
            <Box>
              <Box display="flex" flexDirection="column" pl={4} ml={4}>
                <Typography variant="h5" color="primary">
                  {props.tvShow.show.name}
                </Typography>
                <Box pr={7} mr={7}>
                  <Typography variant="body1" gutterBottom>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: getSummary(props.tvShow.show.summary),
                      }}
                    />
                  </Typography>
                </Box>
                <Box pt={1}>
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    className={classes.buttonSearch}
                    onClick={handleShowEpisodes}
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
