import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MainLayout = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header></Header>

      <Outlet></Outlet>

      <div className="bg-slate-100">
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
