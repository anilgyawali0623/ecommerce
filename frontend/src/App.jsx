import React from "react";
import { Button } from "flowbite-react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import NavbarPoduct from "./components/NavbarPoduct";
function App() {
  return (
    <div>
      <TopBar />
      <Navbar/>
      <NavbarPoduct/>
    </div>
  );
}

export default App;
