// *https://www.registers.service.gov.uk/registers/country/use-the-api*
//import fetch from "cross-fetch";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";

// function sleep(delay = 0) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, delay);
//   });
// }

export default function Asynchronous(props) {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  const [searchTerm, setSearchTerm] = useState("");

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const handleTextFieldChange = (e) => {
    if (e.target.value === undefined) {
      setSearchTerm("");
    }

    setSearchTerm(e.target.value);
  };

  React.useEffect(() => {
    if (searchTerm) {
      fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            //setItems(result);

            let items = Object.keys(result).map((key) => result[key].show);

            setOptions(items);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    } else {
      setIsLoaded(true);
      setOptions([]);
    }
  }, [searchTerm]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  function handleChange(e) {
    let selectedValue = e.target.innerText;
    if (selectedValue === undefined) {
      selectedValue = "";
    }
    history.push(`/search?q=${selectedValue}`);
  }

  return (
    <Autocomplete
      id="asynchronous-demo"
      onChange={handleChange}
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          onChange={handleTextFieldChange}
          value={searchTerm}
          placeholder={props.placeHolder}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
