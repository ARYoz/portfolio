import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import Projects from "./routes/Projects";
import BeyondCode from "./routes/BeyondCode";
import "./App.css";




export default function App() {
  return (
    <>
    <Navbar />
    <main className="layout">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/BeyondCode" element={<BeyondCode />} />
      </Routes>
    </main>
    </>
  );
}
