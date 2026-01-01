import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { Navbar } from "./reusable/Navbar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Playground from "./components/Playground";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/playground" element={<Playground />} />
    </Routes>
    </>
  );
}

export default App;
