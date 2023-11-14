import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./Components/Navbar";
import {ShoppingCartProvider} from "./context/ShoppingCartContext";
import "./App.css";

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <div className="container blockquote">
          <Navbar />
          <Routes>
            <Route path="/" element={<Store />} />
            <Route path="/Store" element={<Home />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
