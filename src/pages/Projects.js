/**
 * I Marita Aziga, 000368577 certify that this material is my original work. 
 * No other person's work has been used without due acknowledgement. 
 * I have not made my work available to anyone else.  
 */
import { Link } from "react-router-dom";
import "../App.css";
import "../css/Projects.css"

export default function Projects() {
      return (
            <div className="container">
                  <h1 className="heading">STAY TUNED!</h1>
                  <section className="bodyContainer">
                        <h2>Projects will be coming soon.</h2>
                        <p>Im working hard to build some fancy interfaces!</p>
                        <Link to="/">
                              <button type="button" className="projectsButton">Back to Home</button>
                        </Link>
                  </section>
            </div>
      );
}