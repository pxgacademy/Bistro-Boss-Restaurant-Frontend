import Button from "../../../components/button/Button";

const Card = ({item}) => {
    const {image} = item || {};
    return (
        <div className="bg-[#F3F3F3] group">
                <div className="w-full h-80 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    src={image}
                    alt="chef recommends"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold">Breakfast Special</h3>
                  <p className="text-darkThree mt-2 mb-4">
                    Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
                  </p>
                  <Button>Add to cart</Button>
                </div>
              </div>
    );
};

export default Card;