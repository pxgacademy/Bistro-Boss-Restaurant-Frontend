import PropTypes from "prop-types";
const MenuCard = ({ item }) => {
  const { name, recipe, image, price } = item || {};

  return (
    <div className="flex gap-5">
      <img className="w-28 h-24 object-cover rounded-r-full rounded-bl-full" src={image} alt="" />
      <div>
        <h2 className="text-darkOne text-xl font-Cinzel uppercase">{name}----------</h2>
        <p className="text-darkThree">{recipe}</p>
      </div>
      <p className="text-primaryColor">${price}</p>
    </div>
  );
};

MenuCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MenuCard;
