import React, { useState } from "react";
import { Button } from "flowbite-react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Home from "./pages/Home";
import Signup from "./components/Signup";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      <BrowserRouter>
        <TopBar />
        <Navbar toggleModal={toggleModal} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collections/:name" element={<Collection />} />
          <Route
            path="/sign-up"
            element={
              <Signup isModalOpen={isModalOpen} toggleModal={toggleModal} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
