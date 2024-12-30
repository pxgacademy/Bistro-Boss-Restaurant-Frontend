import { useEffect, useState } from "react";
import { useAPI_LINK } from "./useAPI_LINKS";

const useAPI_Loader = (link) => {
  const API_LINK = useAPI_LINK();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleMenuLoading = async () => {
      try {
        const response = await API_LINK(`/${link}`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        alert(error.message);
      }
    };

    handleMenuLoading();
  }, [link]);

  return { data, isLoading };
};

export default useAPI_Loader;
