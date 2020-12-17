import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    borderRadius: 5,
  },
}));

export default function ImageMedium(props) {
  const classes = useStyles();
  if (props.imageObject) {
    return (
      <img
        src={props.imageObject.medium}
        className={classes.img}
        alt={props.altText}
      />
    );
  } else {
    // Add a missing image to keep spacing in the list
    return (
      <img src="noimage.png" alt={props.altText} className={classes.img} />
    );
  }
}
