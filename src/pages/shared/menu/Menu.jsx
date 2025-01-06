import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import MenuCard from "./MenuCard";
import usePublicAPI from "../../../hooks/usePublicAPI";

const Menu = ({ link, className = "" }) => {
  const publicAPI = usePublicAPI();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const handleMenuLoading = async () => {
      try {
        const response = await publicAPI
        
        
        
        (`/${link}`);
        setItems(response.data);
      } catch (error) {
        // alert(error.message);
      }
    };

    handleMenuLoading();
  }, [link]);

  return (
    <div className={`grid md:grid-cols-2 gap-y-4 gap-x-6 mt-10 ${className}`}>
      {items?.map((item) => (
        <MenuCard key={item._id} item={item} />
      ))}
    </div>
  );
};

Menu.propTypes = {
  link: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Menu;
