import "../css/NavBar.css";
import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
    return (
            <nav className="navbar">
                <div className="home">
                    <h2>
                        <Link to="/">
                            MARI
                        </Link>
                    </h2>
                </div>
                <div className="links">
                    <h3>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </h3>
                    <h3>
                        <NavLink to="/resume">
                            Resume
                        </NavLink>
                    </h3>
                    <h3>
                        <NavLink to="/projects">
                            Projects
                        </NavLink>
                    </h3>
                </div>
                <div className="contacts">
                    <h3>
                        <NavLink to="/contacts">
                            Contacts
                        </NavLink>
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