import bannerImg from "../../../assets/shop/banner2.jpg";
import Section from "../../../components/sectionContainer/Section";
import Cover from "../../shared/cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./reactTabStyles.css";
import ShopCards from "../shopCards/ShopCards";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";

const OurShop = () => {
  const { data } = useLoaderData();
  const {menu_name} = useParams()
  const menu_items = ['salad', 'pizza', 'soups', 'desserts', 'drinks']
  const [index, setIndex] = useState(menu_items.indexOf(menu_name))

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
        <Tabs selectedIndex={index} onSelect={(i) => setIndex(i)}>
          <TabList>
            <Tab><Link to='/our-shop/salad'>SALAD</Link></Tab>
            <Tab><Link to='/our-shop/pizza'>PIZZA</Link></Tab>
            <Tab><Link to='/our-shop/soups'>SOUPS</Link></Tab>
            <Tab><Link to='/our-shop/desserts'>DESSERTS</Link></Tab>
            <Tab><Link to='/our-shop/drinks'>DRINKS</Link></Tab>
          </TabList>

          <TabPanel>
            <ShopCards category="salad" categoryCount={data} />
          </TabPanel>
          <TabPanel>
            <ShopCards category="pizza" categoryCount={data} />
          </TabPanel>
          <TabPanel>
            <ShopCards category="soup" categoryCount={data} />
          </TabPanel>
          <TabPanel>
            <ShopCards category="dessert" categoryCount={data} />
          </TabPanel>
          <TabPanel>
            <ShopCards category="drinks" categoryCount={data} />
          </TabPanel>
        </Tabs>
      </Section>
    </section>
  );
};

export default OurShop;
