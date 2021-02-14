import React from "react";
import useSomeData from "path/to/custom-hook";

const SomeComponent = (props) => {
  const { someData, loading, error } = useSomeData();
  return (
    <React.Fragment>
      {loading && <div>{"Loading..."}</div>}
      {!loading && error && <div>{`Error: ${error}`}</div>}
      {!loading && !error && someData && (
        <div>{/* INSERT SOME AMAZING UI */}</div>
      )}
    </React.Fragment>
  );
};
