import React from "react";
import { AppRouter } from "./router/AppRouter";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./fundaStohr/components/Navbar/NavBar";

export const StohrApp = () => {
  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  );
};
