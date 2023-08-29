import { FC, ReactNode } from "react";
import Navbar from "../../components/Nav/Navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <section className="h-[100vh] bg-[#F3F4F6] overflow-hidden">
      <Navbar />
      {children}
    </section>
  );
};

export default Layout;
