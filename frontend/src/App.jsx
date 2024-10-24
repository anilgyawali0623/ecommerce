import React from "react";
import { Button } from "flowbite-react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Home from "./pages/Home";
function App() {
  return (
    <div>
      <BrowserRouter>
      <TopBar />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collections/:name" element={<Collection/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
