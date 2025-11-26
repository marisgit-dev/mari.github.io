import "../css/NavBar.css";

export default function NavBar() {
   return (
        <nav className="navbar">
            <div>
                <a href="#home">Home</a>
            </div>
            <div className="links">
                <a href="#about">About</a>
                <a href="#resume">Resume</a>
                <a href="#projects">Projects</a>
            </div>
            <div>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
}