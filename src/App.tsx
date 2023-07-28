import { useReducer } from "react";
import "./App.css";

import { BookingPage } from "./BookingPage/BookingPage";

import { Footer } from "./Footer/Footer";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Homepage } from "./HomePage/Homepage";

import { Header } from "./Header/Header";
import { initializeTimes, updateTimes } from "./updateTimes";

export function App() {
  const [availableTimes, dispatchChangeAvailableTimes] = useReducer(
    updateTimes,
    "",
    initializeTimes
  );

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/reservation"
          element={
            <BookingPage
              availableTimes={availableTimes}
              updateAvailableTimes={dispatchChangeAvailableTimes}
            />
          }
        />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <Footer
        logoSrc="logo-small.png"
        logoAlt="Logo"
        address="1001 E 43rd St, Chicago, IL 60653"
        phone="(555) 555-1234"
        email="info@littlelemon.com"
      />
    </BrowserRouter>
  );
}
