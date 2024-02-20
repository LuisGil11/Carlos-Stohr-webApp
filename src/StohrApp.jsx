import React from "react";
import { AppRouter } from "./router/AppRouter";
import { NavBar } from "./fundaStohr/components/NavBar";
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
