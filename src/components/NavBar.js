import "../css/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
            <nav className="navbar">
                <div className="home">
                    <h3>
                        <Link to="/">Mari</Link>
                    </h3>
                </div>
                <div className="links">
                    <h3>
                        <Link to="/about">About</Link>
                    </h3>
                    <h3>
                        <Link to="/resume">Resume</Link>
                    </h3>
                    <h3>
                        <Link to="/projects">Projects</Link>
                    </h3>
                </div>
                <div className="contacts">
                    <h3>
                        <Link to="/contacts">Contacts</Link>
                    </h3>
                </div>
            </nav>
    )
}

/*export default function NavBar() {
   return (
        <nav className="navbar">
            <div className="home">
                <a href="#home">Home</a>
            </div>
            <div className="links">
                <a href="#about">About</a>
                <a href="#resume">Resume</a>
                <a href="#projects">Projects</a>
            </div>
            <div className="contact">
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
}*/