import PropTypes from "prop-types";
import { useAPI_LINK } from "../../../hooks/useAPI_LINKS";
import { useEffect, useState } from "react";
import Card from "./Card";

const ShopCards = ({ category, className = "" }) => {
  const API_LINK = useAPI_LINK();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMenuLoading = async () => {
      try {
        const response = await API_LINK(`/menu?category=${category}`);
        setItems(response.data);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    handleMenuLoading();
  }, [category]);

  if (isLoading)
    return (
      <div className="w-full min-h-80 flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div
      className={`grid sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 md:gap-10 mt-10 ${className}`}
    >
      {items?.map((item) => (
        <Card key={item._id} item={item} />
      ))}
    </div>
  );
};

ShopCards.propTypes = {
  category: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ShopCards;
