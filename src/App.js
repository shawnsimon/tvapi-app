import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import SearchBar from "./components/tvshow/search-bar";
import ShowList from "./components/tvshow/show-list";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
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
  const [query, setQuery] = useState("");
  const handleSearchClick = (searchTerm) => {
    setQuery(searchTerm);
  };

  return (
    <div className="App">
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Show Finder
          </Typography>
        </Toolbar>
      </AppBar>
      <Box m={2} className={classes.borderBox}>
        <Box mt={2} display="flex" justifyContent="center">
          <Box></Box>
          <SearchBar onSearchClick={handleSearchClick} />
        </Box>
        <Box mt={2} display="flex" justifyContent="center">
          <Box>
            <ShowList query={query} />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
