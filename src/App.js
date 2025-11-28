import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
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
