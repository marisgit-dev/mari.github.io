/**
 * I Marita Aziga, 000368577 certify that this material is my original work. 
 * No other person's work has been used without due acknowledgement. 
 * I have not made my work available to anyone else.  
 */
import { Link } from 'react-router-dom';
import '../css/Footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <section className='footerTop'>
                <div className='copyright'>
                    <p>© 2025 Marita Aziga</p>
                </div>
                <div className='pages'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </section>
            <div className='caption'>
                <p>
                    This website was created temporarily for an assignment. You can find my actual portfolio website here...
                </p>
            </div>
        </footer>
    );
} 