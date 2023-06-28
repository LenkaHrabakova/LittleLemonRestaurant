import React from "react";
import "./App.css";

import { BookingPage } from "./BookingPage/BookingPage";

import { Footer } from "./Footer/Footer";

// import Main from "../Main";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Homepage } from "./HomePage/Homepage";

import Header from "./Header/Header";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservation" element={<BookingPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <Footer />
      {/* <Main /> */}
    </BrowserRouter>
  );
}