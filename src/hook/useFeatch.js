import { useState, useEffect } from "react";
import { useFetchFromApi } from "../utils/useFetchFromApi";
const useFeatch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading("Loading...");
    setData(null);
    setError(null);
    useFetchFromApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong");
      });
  }, [url]);
//  console.log(data);
  return {data, loading, error};
};
export default useFeatch;
