import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import Cover from "../../shared/cover/Cover";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import coverBg from "../../../assets/home/chef-service.jpg";
import Menu from "../../shared/menu/Menu";
import Button from "../../../components/button/Button";
import ChefRecommends from "../chefRecommends/ChefRecommends";
import featuredImg from "../../../assets/home/featured.jpg";
import Testimonials from "../testimonials/Testimonials";

const Home = () => {
  return (
    <section>
      <Banner />

      <section className="mt-16 max-w-7xl mx-auto">
        <Category />

        {/* chef_service */}
        <section className="mt-16 md:mt-24">
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

        <section className="mt-16 md:mt-24">
          <SectionTitle title="FROM OUR MENU" subTitle="Check it out" />

          <div className="mt-10">
            <Menu link="menu?category=popular" />

            <div className="flex justify-center mt-5">
              <Button variant="secondary">View Full Menu</Button>
            </div>
          </div>
        </section>

        <section className="w-full py-16 mt-16 md:mt-24 bg-darkOne text-white text-center text-4xl">
          <p>
            Call Us: <span className="font-Cinzel">+88 0192345678910</span>
          </p>
        </section>

        <section className="mt-16 md:mt-24">
          <SectionTitle title="CHEF RECOMMENDS" subTitle="Should Try" />
          <ChefRecommends />
        </section>
      </section>

      <section className="relative mt-16 md:mt-24 w-full bg-[url(./assets/home/featured.jpg)] bg-center bg-no-repeat bg-cover min-h-[750px]">
        <div className="absolute w-full h-full bg-black/50 flex items-center justify-center">
          <div className="max-w-7xl mx-auto">
            <SectionTitle
              title="FROM OUR MENU"
              subTitle="Check it out"
              colors="text-white"
            />

            <div className="grid md:grid-cols-2 gap-6 lg:gap-16 items-center mt-14">
              <img src={featuredImg} alt="featured image" />
              <div className="text-white">
                <p className="text-xl abd">March 20, 2023</p>
                <h3 className="text-2xl abd-hover:text-red-400">
                  WHERE CAN I GET SOME?
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  voluptate facere, deserunt dolores maiores quod nobis quas
                  quasi. Eaque repellat recusandae ad laudantium tempore
                  consequatur consequuntur omnis ullam maxime tenetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </section>
  );
};

export default Home;
