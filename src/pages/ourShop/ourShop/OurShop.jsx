import bannerImg from "../../../assets/shop/banner2.jpg";
import Section from "../../../components/sectionContainer/Section";
import Cover from "../../shared/cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./reactTabStyles.css";
import ShopCards from "../shopCards/ShopCards";

const OurShop = () => {
  return (
    <section>
      <Cover
        title="Our Shop"
        subTitle="Would you like to try a dish?"
        titleSize="text-4xl font-bold"
        bgImg={bannerImg}
        coverHight="h-[600px]"
      />

      <Section className="max-w-7xl mb-10 md:mb-16">
        <Tabs>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>

          <TabPanel>
            <ShopCards category="salad" />
          </TabPanel>
          <TabPanel>
            <ShopCards category="pizza" />
          </TabPanel>
          <TabPanel>
            <ShopCards category="soup" />
          </TabPanel>
          <TabPanel>
            <ShopCards category="dessert" />
          </TabPanel>
          <TabPanel>
            <ShopCards category="drinks" />
          </TabPanel>
        </Tabs>
      </Section>
    </section>
  );
};

export default OurShop;
