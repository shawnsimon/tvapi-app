import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Search from "./components/tvshow/search";
import Episodes from "./components/tvshow/episodes";
import { Switch, Route } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  borderBox: {
    backgroundColor: "#fff",
    height: "100%",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Show Finder
          </Typography>
        </Toolbar>
      </AppBar>
      <Box m={2} className={classes.borderBox}>
        <Switch>
          <Route path="/episodes" component={Episodes}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/" component={Search}></Route>
        </Switch>
      </Box>
    </React.Fragment>
  );
}

export default App;
