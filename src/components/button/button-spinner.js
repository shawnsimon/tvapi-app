import React from "react";
import { Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
const ButtonSpinner = (props) => (
  <React.Fragment>
    <Button {...props}>
      {props.isLoading ? (
        <CircularProgress color="secondary" />
      ) : (
        props.children
      )}
    </Button>
  </React.Fragment>
);

export default ButtonSpinner;
