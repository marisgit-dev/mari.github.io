import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState, useEffect } from 'react';

import Home from "./pages/Home";
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import "./App.css";

function App() {
  const [y, setY] = useState(window.scrollY);
  const [totalY, setTotalY] = useState();
  const [scrollBar, setScrollBar] = useState();
  
  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    const element = document.getElementsByTagName("body")[0];
    setTotalY(element.clientHeight);
    setScrollBar(window.innerHeight);
  },[y]);
  
  const scroll = `${((y+scrollBar)/totalY)*100}`;

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className='progressBar' style={{ width: scroll }}></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
