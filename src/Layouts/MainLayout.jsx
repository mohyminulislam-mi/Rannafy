import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <header className="bg-white sticky top-0 z-50">
        <Header />
      </header>
      <main>
        <Outlet></Outlet>
      </main>
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
    </>
  );
};

export default MainLayout;
