import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Home from "./components/Home";
import Resume from "./components/Resume";
import NavBar from "./components/Navbar";
import Preloader from "./components/PreLoader";
import ScrollToTop from "./components/ScrollToTop"
import Skillset from "./components/Skillset";
import Projects from "./components/Projects";
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skillset" element={<Skillset />} /> 
          <Route path="/project" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;