import React from "react";
import { useState } from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ButtonSpinner from "../button/button-spinner";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  inputSearch: {
    margin: theme.spacing(1),
    backgroundColor: "#F2F3F8",
    width: "400px",
  },
  buttonSearch: {
    margin: theme.spacing(1),
    height: "50px",
    root: {
      backgroundColor: "#F2F3F8",
    },
  },
}));

export default function SearchBar(props) {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchClick = () => {
    props.onSearchClick(searchTerm);
  };

  const handleTextFieldChange = (e) => {
    setSearchTerm(e.target.value);
    //setTimeout(() => props.onSearchClick(e.target.value), 5000);
  };

  // TODO: Tweak the text box to remove the outline
  return (
    <div>
      <TextField
        className={classes.inputSearch}
        id="searchField"
        placeholder="Search…"
        variant="outlined"
        color="secondary"
        onChange={handleTextFieldChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <ButtonSpinner
        title={"Search"}
        variant="contained"
        size="large"
        color="primary"
        className={classes.buttonSearch}
        onClick={handleSearchClick}
        isLoading={!props.isLoading}
      >
        Search
      </ButtonSpinner>
    </div>
  );
}
