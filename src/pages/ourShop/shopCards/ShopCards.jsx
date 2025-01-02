import PropTypes from "prop-types";
import { useAPI_LINK } from "../../../hooks/useAPI_LINKS";
import { useEffect, useState } from "react";
import Card from "./Card";

const ShopCards = ({ category, categoryCount, className = "" }) => {
  const API_LINK = useAPI_LINK();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { count } = categoryCount.find((item) => item._id === category);
  const [itemPerPage, setItemPerPage] = useState(6);
  const [selectedPage, setSelectedPage] = useState(1);
  const skip = (selectedPage - 1) * itemPerPage;

  const numberOfPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    const handleMenuLoading = async () => {
      try {
        const response = await API_LINK(
          `/menu?category=${category}&skip=${skip}&limit=${itemPerPage}`
        );
        setItems(response.data);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    handleMenuLoading();
  }, [category, itemPerPage, selectedPage]);

  if (isLoading)
    return (
      <div className="w-full min-h-80 flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <>
      <div
        className={`grid sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 md:gap-10 mt-10 ${className}`}
      >
        {items?.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>

      {/* pagination */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-3">
        <div className="flex items-center flex-wrap gap-1">
          {/* Pagination buttons */}
          {pages?.map((page) => (
            <button
              key={page}
              onClick={() => setSelectedPage(page + 1)}
              className={`${
                selectedPage === page + 1 ? "bg-accent" : "bg-transparent"
              } py-[7px] px-3 border border-gray-300 dark:border-gray-600 rounded-lg`}
            >
              {page + 1}
            </button>
          ))}
        </div>
        <div>
          <select
            onChange={(e) => {
              setItemPerPage(parseInt(e.target.value));
              setSelectedPage(1);
            }}
            className="bg-transparent py-2 px-3 border border-gray-300 dark:border-gray-600 rounded-lg focus-within:border-0 focus-within:outline focus-within:outline-2 focus-within:outline-blue-500"
          >
            <option
              value={6}
              className="bg-white dark:bg-darkThree text-darkTwo dark:text-lightTwo"
            >
              6
            </option>
            <option
              value={12}
              className="bg-white dark:bg-darkThree text-darkTwo dark:text-lightTwo"
            >
              12
            </option>
            <option
              value={18}
              className="bg-white dark:bg-darkThree text-darkTwo dark:text-lightTwo"
            >
              18
            </option>
            <option
              value={24}
              className="bg-white dark:bg-darkThree text-darkTwo dark:text-lightTwo"
            >
              24
            </option>
          </select>
        </div>
      </div>
    </>
  );
};

ShopCards.propTypes = {
  category: PropTypes.string.isRequired,
  categoryCount: PropTypes.array,
  className: PropTypes.string,
};

export default ShopCards;
