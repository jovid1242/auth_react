import React from "react";
import { Routes, Route, useLocation, Navigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Confirm from "../pages/Confirm";
import Home from "../pages/Home";

export default function PathRoute() {
  const user = JSON.parse(localStorage.getItem("user"));

  function RequireAuth() {
    let location = useLocation();

    if (!user?.token) {
      return <Navigate to="/login" state={{ from: location }} />;
    }

    return <Outlet />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route element={<RequireAuth />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}
