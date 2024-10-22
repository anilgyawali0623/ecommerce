import React from "react";
import { Button } from "flowbite-react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import NavbarPoduct from "./components/NavbarPoduct";
import BannerImage from "./components/BannerImage";
import ShopBrand from "./components/ShopBrand";
function App() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <NavbarPoduct />
      <BannerImage />
      <ShopBrand />
    </div>
  );
}

export default App;
