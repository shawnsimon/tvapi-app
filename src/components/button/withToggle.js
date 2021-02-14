import React, { useState } from "react";

const withToggle = (Component) => ({ ...props }) => {
  const [toggleStatus, setToggleStatus] = useState(false);

  const toggle = () => {
    setToggleStatus((prevToggleStatus) => !prevToggleStatus);
  };

  return <Component toggleStatus={toggleStatus} toggle={toggle} {...props} />;
};

export default withToggle;
