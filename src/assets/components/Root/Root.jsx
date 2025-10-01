import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import "./Root.css";
import { useNavigation } from "react-router";

const Root = () => {

  const navigation = useNavigation()
  const isNavigating = Boolean(navigation.location)

  return (
    <div>
      <Header></Header>
      <div className="root-main">
        <SideBar></SideBar>
        {isNavigating && <span>Loading...</span>}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
