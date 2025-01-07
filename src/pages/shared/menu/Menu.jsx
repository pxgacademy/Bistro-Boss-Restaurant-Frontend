import PropTypes from "prop-types";

import MenuCard from "./MenuCard";
import usePublicAPI from "../../../hooks/usePublicAPI";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../components/loading/Loading";

const Menu = ({ link, className = "" }) => {
  const publicAPI = usePublicAPI();

  const { data: items, isLoading } = useQuery({
    queryKey: [link],
    queryFn: async () => {
      const { data } = await publicAPI.get(`/${link}`);
      return data;
    },
    initialData: [],
  });

  if (isLoading) return <Loading />;
  
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
