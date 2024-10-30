import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Home from "./pages/Home";
import Signup from "./components/Signup";
import ProductInput from "./pages/ProductInput";

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
          {/* <Route path="/adminPanel" element={<ProductInput />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collections/:name" element={<Collection />} />
        </Routes>

        {isModalOpen && <Signup isModalOpen={isModalOpen} toggleModal={toggleModal} />}
      </BrowserRouter>
    </div>
  );
}

export default App;
