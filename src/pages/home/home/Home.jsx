import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import Cover from "../../shared/cover/Cover";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import coverBg from "../../../assets/home/chef-service.jpg";

const Home = () => {
  return (
    <section>
      <Banner />

      <section className="mt-16 max-w-7xl mx-auto">
        <Category />

        {/* chef_service */}
        <section className="mt-16">
          <Cover
            title="Bistro Boss"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, libero accusamus laborum deserunt ratione dolor
                officiis praesentium! Deserunt magni aperiam dolor eius dolore
                at, nihil iusto ducimus incidunt quibusdam nemo."
            titleSize="text-3xl"
            bgImg={coverBg}
            coverHight="h-[500px]"
          />
        </section>

        <section className="mt-16">
          <SectionTitle
            title="FROM OUR MENU"
            subTitle="Check it out"
            borderColor="border-gray-300"
          />

          <div></div>
        </section>
      </section>
    </section>
  );
};

export default Home;
