import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import useAPI_Loader from "../../../hooks/useAPI_Loader";
import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import MiniLoading from "../../../components/loading/MiniLoading";

const Testimonials = () => {
  const [data, isLoading] = useAPI_Loader("reviews", "reviews");
  if (isLoading) return <MiniLoading/>;
  return (
    <section className="my-16 md:my-24 max-w-7xl mx-auto">
      <SectionTitle title="TESTIMONIALS" subTitle="What Our Clients Say" />

      <div className="mt-10" />
      <AwesomeSlider className="bg-white h-[500px]">
        {data?.map((item) => (
          <div key={item._id} className="bg-gray-50 w-full h-full text-darkOne">
            <div className="w-full h-full px-32 flex flex-col items-center justify-center">
              <div>
                <Rating className="max-w-40" value={item.rating} readOnly />
              </div>
              <span className="text-7xl mt-5 text-darkTwo">
                <FaQuoteLeft />
              </span>
              <p className="text-darkThree text-center mt-2">{item.details}</p>
              <p className="text-primaryColor text-4xl font-semibold mt-3">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </AwesomeSlider>
    </section>
  );
};

export default Testimonials;
