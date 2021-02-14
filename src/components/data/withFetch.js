import React, { useState, useEffect } from "react";

const useSomeData = () => {
  const [someData, setSomeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!someData) {
      setLoading(true);
      fetch("/some-data")
        .then((response) => response.json())
        .then((data) => setSomeData(data))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }
  }, []);

  return { someData, loading, error };
};
