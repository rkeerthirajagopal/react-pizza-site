import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Routes>
          <Route exact path="/"  element={<Home/>} />
          <Route path="/menu"  element={<Menu/>} />
          <Route path="/about"  element={<About/>} />
          <Route path="/contact"  element={<Contact/>} />
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;