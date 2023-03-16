
import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
 import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion, MotionValue } from "framer-motion";
// import SidebarMenu from "./SidebarMenu";
const routes = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaHome />,
    },
    {
      path: "/users",
      name: "User",
      icon: <FaUser />,
    },
    {
      path: "/messages",
      name: "Messages",
      icon: <MdMessage />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <BiAnalyse />,
    },
    {
      path: "/file-manager",
      name: "File Manager",
      icon: <AiTwotoneFileExclamation />,
      subRoutes: [
        {
          path: "/settings/profile",
          name: "Profile ",
          icon: <FaUser />,
        },
        {
          path: "/settings/2fa",
          name: "2FA",
          icon: <FaLock />,
        },
        {
          path: "/settings/billing",
          name: "Billing",
          icon: <FaMoneyBill />,
        },
      ],
    },
    {
      path: "/order",
      name: "Order",
      icon: <BsCartCheck />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <BiCog />,
      exact: true,
      subRoutes: [
        {
          path: "/settings/profile",
          name: "Profile ",
          icon: <FaUser />,
        },
        {
          path: "/settings/2fa",
          name: "2FA",
          icon: <FaLock />,
        },
        {
          path: "/settings/billing",
          name: "Billing",
          icon: <FaMoneyBill />,
        },
      ],
    },
    {
      path: "/saved",
      name: "Saved",
      icon: <AiFillHeart />,
    },
  ];

const Sidebar = ({children}) => {

  const [isOpen,setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity:0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div className="main-container">
 <motion.div animate={{width: isOpen ? "200px" :"35px"}} className="sidebar">
   <div className="top_section">
   {isOpen && <h1 className="logo"><h1>zCon</h1></h1>}
    <div className="bars">
      <FaBars onClick={toggle} />
    </div>
   </div>
   <div className="search">
    <div className="search_icon">
      <BiSearch />
    </div>
    <AnimatePresence>
              {isOpen && (
                <motion.input
                  
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
   </div>

<section className="routes">
  {routes.map((route) =>
    <NavLink to={route.path} key={route.name} className="link">
    <div className="icon">{route.icon}</div>
    <AnimatePresence>
      {isOpen && (
        <motion.div className="link_text">{route.name}</motion.div>
      )}
    </AnimatePresence>

    </NavLink>
    )}
</section>
 </motion.div>
 <main>
    {children}
 </main>
    </div>
    );
};

export default Sidebar;