import { ReactNode } from "react";

const Layout = ({ children }) => {
  return (
    <div className="h-screen ">
      <main className=" ">{children}</main>
    </div>
  );
};

export default Layout;
