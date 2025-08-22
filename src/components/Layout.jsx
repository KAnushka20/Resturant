// Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Navbar />
      <main style={{ margin: 0, padding: 0 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
