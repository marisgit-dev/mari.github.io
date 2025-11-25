import "../css/NavBar.css";

export default function NavBar() {
    return (
        <nav className="navContainer">
            <div className="indexSection">
                <h2>Home</h2>
            </div>
            <div className="contentSection">
                <h2>About</h2>
                <h2>Resume</h2>
                <h2>Project</h2>
            </div>
            <div className="contactSection">
                <h2>Contact</h2>
            </div>
        </nav>
    );
}