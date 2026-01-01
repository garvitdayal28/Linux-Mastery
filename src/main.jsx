import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Home from "./components/Home.jsx";
import Courses from "./components/courses.jsx";
import Playground from "./components/Playground.jsx";
import { Navbar } from "./reusable/navbar.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
