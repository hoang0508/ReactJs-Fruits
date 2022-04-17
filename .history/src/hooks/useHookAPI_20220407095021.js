import axios from "axios";
import { useEffect, useState } from "react";

export const useHookAPI = (url, arr) => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const reponse = await axios.get(url);
      setValue(reponse?.data.arr);
    };
    fetchData();
  }, [url]);
  return {
    value,
  };
};
