import { Outlet } from "react-router-dom";
import Header from "../Header";

const Layout = () => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Layout;
