import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

/**
 * The only true button.
 *
 * Demos:
 *
 * - [Buttons](https://material-ui.com/components/buttons/)
 *
 * API:
 *
 * - [Button API](https://material-ui.com/api/button/)
 * - inherits [ButtonBase API](https://material-ui.com/api/button-base/)
 *
 */
export default function Button({ size, onClick, children }) {
  const styles = {
    fontSize: Button.sizes[size],
  };

  return (
    <button className="button" style={styles} onClick={onClick}>
      {children}
    </button>
  );
}
Button.propTypes = {
  /** Button label */
  children: PropTypes.node.isRequired,
  /** The size of the button [small, normal, large] */
  size: PropTypes.oneOf(["small", "normal", "large"]),
  /** Button is clicked */
  onClick: PropTypes.func,
};
Button.defaultProps = {
  color: "#333",
  size: "normal",
  onClick: (event) => {
    console.log("You have clicked me!", event.target);
  },
};
Button.sizes = {
  small: "10px",
  normal: "14px",
  large: "18px",
};
