import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Courses from "./components/Courses";
import Playground from "./components/Playground";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="w-screen h-screen bg-linear-to-br from-gray-900 to-slate-600">
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/playground" element={<Playground />} />
    </Routes>
    </div>
  );
}

export default App;
