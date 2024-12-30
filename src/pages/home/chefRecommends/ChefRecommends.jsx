import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import Button from "../../../components/button/Button";

const ChefRecommends = () => {
  return (
    <div className="mt-10 grid md:grid-cols-2 last:grid-cols-3 gap-5 lg:gap-10">
      {/* Card One */}
      <div className="bg-[#F3F3F3]">
        <img
          className="w-full h-80 object-cover"
          src={img1}
          alt="chef recommends"
        />
        <div className="p-6 text-center">
          <h3 className="text-2xl font-semibold">Breakfast Special</h3>
          <p className="text-darkThree mt-2 mb-4">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <Button>Add to cart</Button>
        </div>
      </div>
      
      {/* Card One */}
      <div className="bg-[#F3F3F3]">
        <img
          className="w-full h-80 object-cover"
          src={img2}
          alt="chef recommends"
        />
        <div className="p-6 text-center">
          <h3 className="text-2xl font-semibold">Breakfast Special</h3>
          <p className="text-darkThree mt-2 mb-4">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <Button>Add to cart</Button>
        </div>
      </div>

      {/* Card One */}
      <div className="bg-[#F3F3F3]">
        <img
          className="w-full h-80 object-cover"
          src={img3}
          alt="chef recommends"
        />
        <div className="p-6 text-center">
          <h3 className="text-2xl font-semibold">Breakfast Special</h3>
          <p className="text-darkThree mt-2 mb-4">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <Button>Add to cart</Button>
        </div>
      </div>

    </div>
  );
};

export default ChefRecommends;
