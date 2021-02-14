import React, { useState, useEffect } from "react";
import useSomeData from "./withFetch";
const SomeData = ({ children }) => {
  // DATA FETCHING/MANAGEMENT FRAMEWORK OR LIBRARY OF YOUR CHOICE
  const [someData, loading, error] = useSomeData();
  return children({ someData, loading, error });
};

const SomeComponent = ({ someData, loading, error }) => (
  <React.Fragment>
    {loading && <div>{"Loading..."}</div>}
    {!loading && error && <div>{`Error: ${error}`}</div>}
    {!loading && !error && someData && (
      <div>{/* INSERT SOME AMAZING UI */}</div>
    )}
  </React.Fragment>
);

const SomeComponentWithSomeData = (props) => (
  <SomeData>{(renderProps) => <SomeComponent {...renderProps} />}</SomeData>
);
