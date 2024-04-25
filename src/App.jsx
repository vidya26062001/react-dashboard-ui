/* eslint-disable no-unused-vars */
import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlankPage from "./pages/BlankPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blank" element={<BlankPage />} />
      </Routes>
    </BrowserRouter>
  );
}