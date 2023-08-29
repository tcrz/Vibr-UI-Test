import logo from "../../assets/logo.svg";
import { BookingsSVG, CustomersSVG, HomeSVG, ServicesSVG } from "../SVGs/CustomSVGs";
import { ReactNode, useState } from "react";
import NavDrawer from "./Drawer";
import UserMenu from "../UserMenu";
import MenuItem from "../MenuItem";

export type MenuItemData = {
  icon: ReactNode;
  name: string;
};

export type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const items: MenuItemData[] = [
  {
    icon: <HomeSVG />,
    name: "Dashboard",
  },
  {
    icon: <BookingsSVG />,
    name: "Bookings",
  },
  {
    icon: <CustomersSVG />,
    name: "Customers",
  },
  {
    icon: <ServicesSVG />,
    name: "Services",
  },
];

const Navbar = () => {
  const [drawerState, setDrawerState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
  (anchor: Anchor, open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&    
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawerState({ ...drawerState, [anchor]: open });
  };

  return (
    <>
    <nav className="navbar h-[10vh] bg-white flex items-center px-20 border-b border-[rgba(204, 207, 206, 0.24)] sm:h-[11.5vh]">
      <div className="bgg-yellow-300 w-full h-full flex items-center justify-around sm:justify-between">
        <img src={logo} width="150" height="150" alt="buuk-me-now logo" className="lg:pointer-events-none" onClick={toggleDrawer("left", true)}/>
        <div className="nav-menu borderr border-green-300 hidden items-center gap-6 text-[#808885] lg:flex">
          {items.map((item) => (
            <MenuItem icon={item.icon} name={item.name} />
          ))}
        </div>
        <div className="hidden sm:block">
          <UserMenu name="Buukmenow Demo" email="Buukmenow@gmail.com" />
        </div>
      </div>
    </nav>
    <NavDrawer
      anchor="left"
      toggleDrawer={toggleDrawer}
      open={drawerState['left']}
    />
    </>
  );
};

export default Navbar;
