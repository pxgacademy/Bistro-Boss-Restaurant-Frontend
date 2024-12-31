import bannerImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import Button from "../../../components/button/Button";
import Section from "../../../components/sectionContainer/Section";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import Cover from "../../shared/cover/Cover";
import Menu from "../../shared/menu/Menu";

const OurMenu = () => {
  return (
    <section>
      <Cover
        title="Our Menu"
        subTitle="Would you like to try a dish?"
        titleSize="text-4xl font-bold"
        bgImg={bannerImg}
        coverHight="h-[600px]"
      />

      <Section>
        <SectionTitle title="TODAY'S OFFER" subTitle="Don't miss" />
        <Menu link="menu?category=offered" />
        <div className="flex justify-center mt-8">
          <Button variant="secondary">ORDER YOUR FAVORITE FOOD</Button>
        </div>
      </Section>

      <section className="mt-16 md:mt-24">
        <Cover
          title="Desserts"
          description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          titleSize="text-3xl"
          bgImg={dessertImg}
          coverHight="h-[500px]"
        />
        <Menu link="menu?category=dessert" className="max-w-7xl mx-auto" />
        <div className="flex justify-center mt-8">
          <Button variant="secondary">ORDER YOUR FAVORITE DESSERT</Button>
        </div>
      </section>

      <section className="mt-16 md:mt-24">
        <Cover
          title="Pizza"
          description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          titleSize="text-3xl"
          bgImg={pizzaImg}
          coverHight="h-[500px]"
        />
        <Menu link="menu?category=pizza" className="max-w-7xl mx-auto" />
        <div className="flex justify-center mt-8">
          <Button variant="secondary">ORDER YOUR FAVORITE PIZZA</Button>
        </div>
      </section>

      <section className="mt-16 md:mt-24">
        <Cover
          title="Salad"
          description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          titleSize="text-3xl"
          bgImg={saladImg}
          coverHight="h-[500px]"
        />
        <Menu link="menu?category=salad" className="max-w-7xl mx-auto" />
        <div className="flex justify-center mt-8">
          <Button variant="secondary">ORDER YOUR FAVORITE SALAD</Button>
        </div>
      </section>

      <section className="my-16 md:my-24">
        <Cover
          title="Soup"
          description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          titleSize="text-3xl"
          bgImg={soupImg}
          coverHight="h-[500px]"
        />
        <Menu link="menu?category=soup" className="max-w-7xl mx-auto" />
        <div className="flex justify-center mt-8">
          <Button variant="secondary">ORDER YOUR FAVORITE SOUP</Button>
        </div>
      </section>
    </section>
  );
};

export default OurMenu;
