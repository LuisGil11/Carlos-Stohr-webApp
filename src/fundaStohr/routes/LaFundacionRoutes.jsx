import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LaFundacion } from "../pages/laFundacion/LaFundacion";

export const LaFundacionRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LaFundacion />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
