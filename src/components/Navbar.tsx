import logo from "../assets/logo.svg";
import home from "../assets/home.svg";
import MenuItem from "./MenuItem";
import UserMenu from "./UserMenu";
import { BookingsSVG, CustomersSVG, HomeSVG, ServicesSVG } from "./SVGs/CustomSVGs";
import { ReactNode } from "react";

export type MenuItemData = {
  icon: ReactNode;
  name: string;
};

const items: MenuItemData[] = [
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
  return (
    <nav className="navbar h-[12vh] bg-white flex items-center px-20 border-b border-[rgba(204, 207, 206, 0.24)]">
      <div className="bgg-yellow-300 w-full h-full flex items-center justify-between">
        <img src={logo} width="150" height="150" alt="buuk-me-now logo" />
        <div className="nav-menu borderr border-green-300 flex items-center gap-8 text-[#808885]">
          {items.map((item) => (
            <MenuItem icon={item.icon} name={item.name} />
          ))}
        </div>
        <UserMenu name="Buukmenow Demo" email="Buukmenow@gmail.com" />
      </div>
    </nav>
  );
};

export default Navbar;
