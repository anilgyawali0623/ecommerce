import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Home from "./pages/Home";
import Signup from "./components/Signup";
import ProductInput from "./pages/ProductInput";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <BrowserRouter>
        <TopBar />
        <ToastContainer />

        <Navbar toggleModal={toggleModal} />
        <Routes>
          {/* <Route path="/adminPanel" element={<ProductInput />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collections/:name" element={<Collection />} />
        </Routes>

        {isModalOpen && <Signup isModalOpen={isModalOpen} toggleModal={toggleModal}  setIsModalOpen={setIsModalOpen}/>}
      </BrowserRouter>
    </div>
  );
}

export default App;
