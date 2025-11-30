/**
 * I Marita Aziga, 000368577 certify that this material is my original work. 
 * No other person's work has been used without due acknowledgement. 
 * I have not made my work available to anyone else.  
 */
import "../App.css";
import "../css/Statement.css";

import { Link } from "react-router-dom";

export default function Statement() {
    return (
        <div className="jumbotron">
            <div className="jumboTitle">
                <h3>Welcome to my site! My name is</h3>
                <h1 className="title">Marita Aziga</h1>
                <h2>Front-end Developer & Web Designer</h2>
            </div>
            <div className="statement">
                <p>
                    Chill dev with a background in Graphic Design. 
                    I development clean, snazzy applications for web and mobile.  
                </p>
                <p>If you'd like to learn more,</p>
                <Link to="/about">
                    <button className="clickMe" >Click Here!</button>
                </Link>
            </div>
        </div>
    );
}