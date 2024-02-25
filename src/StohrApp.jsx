import React from "react";
import { AppRouter } from "./router/AppRouter";
import { NavBar } from "./fundaStohr/components/NavBar";
import { Footer } from "./fundaStohr/components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const StohrApp = () => {
  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  );
};
