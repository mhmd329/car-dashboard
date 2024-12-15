import React from "react";
import Home from "./pages/home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Login from "./pages/login/Login";
import Booking from "./pages/Booking/Booking";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/booking" element={<Booking />} />
    </Route>
  )
);
const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;