import React from "react";
import { AppRouter } from "./router/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./fundaStohr/components/NavBar";

export const StohrApp = () => {
  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  );
};
