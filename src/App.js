import { Routes, Route } from "react-router-dom";

import Banditos from "./screens/Banditos.jsx";
import Delation from "./screens/Delation.jsx";
import Footer from "./components/Footer.jsx";
import Home from "../src/screens/Home.jsx";
import Header from "./components/Header.jsx";
import BanditosDetails from "./components/Banditodetails.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/banditos" element={<Banditos />} />
        <Route path="/delation" element={<Delation />} />
        <Route path="/bandits/:id" element={<BanditosDetails />} />
      </Routes>
      <Footer />
    </div>
  ); 
}

export default App;