import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url, {mode:'cors'})
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setError(null);
        setData({ resultArray: data });
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [url]);

  return {
    loading,
    error,
    data,
  };
};

export default useFetch;
