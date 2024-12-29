import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import Header from "../pages/shared/header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
