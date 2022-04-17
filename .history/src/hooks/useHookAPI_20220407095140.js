import axios from "axios";
import { useEffect, useState } from "react";

export const useHookAPI = (url) => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const reponse = await axios.get(url);
      setValue(reponse?.data);
    };
    fetchData();
  }, [url]);
  return {
    value,
  };
};
