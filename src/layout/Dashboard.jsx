import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaBars, FaCalendarAlt, FaCalendarCheck, FaHistory, FaShoppingCart, FaStar, FaUsers } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { IoBagHandle, IoClose, IoList } from "react-icons/io5";
import { MdAssignmentTurnedIn, MdEmail } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useIsAdmin from "../hooks/useIsAdmin";
import Loading from "../components/loading/Loading";

const Dashboard = () => {
  const [isMenuList, setIsMenuList] = useState(window.innerWidth >= 1024)
  const [isAdmin, isLoading] = useIsAdmin()
  // const {pathname} = useLocation()

  // TODO: enable the functionality 

  // if(pathname === '/dashboard'){
  //   if(isAdmin) return <Navigate to='/dashboard/admin' />
  //   else return <Navigate to='/dashboard/user' />
  // }

  if(isLoading) return <Loading/>

  return (
    <section className="flex font-Cinzel uppercase">
     
      <section className={`w-full ${isMenuList? 'max-w-72':'max-w-[56px]'} min-h-screen bg-primaryColor relative overflow-hidden`}>
      <button onClick={()=> setIsMenuList(!isMenuList)} className="absolute lg:hidden right-2 top-2 btn btn-circle btn-xs btn-neutral text-white z-10">
      {isMenuList? <IoClose />:<FaBars />}
      </button>
        <div className={`min-h-[98px] border-b ${isMenuList? 'border-white/50': 'border-primaryColor'} relative flex items-center`}>
          <div className={`p-5 absolute transition-all duration-300 ${isMenuList? 'left-0':'-left-72'}`}>
            <h1 className="font-bold text-2xl">Bistro Boss</h1>
            <p className="tracking-[.41em]">restaurant</p>
          </div>
        </div>
        <div id="dashboard_menu" className="p-5 font-semibold">

          {isAdmin?           
          <>
          {/* Admin Routes */}
          <div className="flex flex-col gap-y-2">
          <NavLink to='/dashboard/admin'><button><span><AiFillHome /></span> {isMenuList && 'Admin Home'}</button></NavLink>
            <NavLink to='/dashboard/add-items'><button><span><ImSpoonKnife /></span> {isMenuList && 'Add Items'}</button></NavLink>
            <NavLink to='/dashboard/manage-items'><button><span><IoList /></span> {isMenuList && 'Manage Items'}</button></NavLink>
            <NavLink to='/dashboard/manage-bookings'><button><span><MdAssignmentTurnedIn /></span> {isMenuList && 'Manage Booking'}</button></NavLink>
            <NavLink to='/dashboard/all-users'><button><span><FaUsers /></span> {isMenuList && 'All Users'}</button></NavLink>
          </div>
          </>
:
          <>
          {/* User Routes */}
          <div className="flex flex-col gap-y-2">
          <NavLink to='/dashboard/user'><button><span><AiFillHome /></span> {isMenuList && 'User Home'}</button></NavLink>
            <NavLink to='/dashboard/reservation'><button><span><FaCalendarAlt /></span> {isMenuList && 'Reservation'}</button></NavLink>
            <NavLink to='/dashboard/payment-history'><button><span><FaHistory /></span> {isMenuList && 'Payment History'}</button></NavLink>
            <NavLink to='/dashboard/my-cart'><button><span><FaShoppingCart /></span> {isMenuList && 'My Cart'}</button></NavLink>
            <NavLink to='/dashboard/add-review'><button><span><FaStar /></span> {isMenuList && 'Add Review'}</button></NavLink>
            <NavLink to='/dashboard/my-booking'><button><span><FaCalendarCheck /></span> {isMenuList && 'My Booking'}</button></NavLink>
          </div>
          </>
}
          {/* Common Routes */}
          <div className="my-4 border-b border-white/70" />
          <div className="flex flex-col gap-y-2">
            <NavLink to="/"><button><span><AiFillHome /></span> {isMenuList && 'Home'}</button></NavLink>
            <NavLink to="/our-menu"><button><span><IoList /></span> {isMenuList && 'Our Menu'}</button></NavLink>
            <NavLink to="/our-shop/salad"><button><span><IoBagHandle /></span> {isMenuList && 'Our Shop'}</button></NavLink>
            <NavLink to="/contact-us"><button><span><MdEmail /></span> {isMenuList && 'contact us'}</button></NavLink>
          </div>
        </div>
      </section>
      <section className="grow">
        <Outlet />
      </section>
    </section>
  );
};

export default Dashboard;
