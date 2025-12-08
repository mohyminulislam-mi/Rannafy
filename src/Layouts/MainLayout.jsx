import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Shared/Header/Header";
import Footer from "../components/Shared/Footer/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <section>
      <header>
        <Header />
      </header>
      <div>
        <Outlet></Outlet>
      </div>
      <footer>
        <Footer />
      </footer>
      {/* toastify notifaction */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover={false}
        draggable
        theme="light"
      />
    </section>
  );
};

export default MainLayout;
