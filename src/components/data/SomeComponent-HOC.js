import React, { useState, useEffect } from "react";
import useSomeData from "./withFetch";

const withSomeData = (Component) => {
  const ComponentWithSomeData = (props) => {
    // DATA FETCHING/MANAGEMENT FRAMEWORK OR LIBRARY OF YOUR CHOICE
    const [someData, loading, error] = useSomeData();
    return (
      <Component
        {...props}
        someData={someData}
        loading={loading}
        error={error}
      />
    );
  };
  return ComponentWithSomeData;
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

const SomeComponentWithSomeData = withSomeData(SomeComponent);
