import React from "react";
import { DibujandoEnArmonia } from "../pages/dibujandoEnArmonia/DibujandoEnArmonia";
import { Route, Routes } from "react-router-dom";

export const DibujandoEnArmoniaRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DibujandoEnArmonia />} />
    </Routes>
  );
};
