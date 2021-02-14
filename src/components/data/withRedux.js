import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSomeData } from "path/to/data/selectors";
import { fetchSomeData } from "path/to/data/action";

const useSomeData = () => {
  const dispatch = useDispatch();
  const someData = useSelector(selectSomeData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!someData) {
      setLoading(true);
      dispatch(fetchSomeData())
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }
  }, []);

  return { someData, loading, error };
};
