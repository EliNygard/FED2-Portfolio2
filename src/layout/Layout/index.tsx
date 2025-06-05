import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="max-w-7xl mx-auto px-2">
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
