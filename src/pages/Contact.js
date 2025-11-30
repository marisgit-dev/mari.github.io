/**
 * I Marita Aziga, 000368577 certify that this material is my original work. 
 * No other person's work has been used without due acknowledgement. 
 * I have not made my work available to anyone else.  
 */
import Form from "../components/Form";
import "../css/Contact.css";
import "../App.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {
      return (
            <div className="container">
                  <h1 className="heading">WANT TO GET IN TOUCH?</h1>
                  <section className="bodyContainer">
                        <h2>Leave a message or check out my social media. I'll get back to you soon!</h2>
                        <div className="icons">
                              <LinkedInIcon fontSize="large" color="#F7F7EA"/>
                              <GitHubIcon fontSize="large" color="#F7F7EA"/>
                        </div>
                  </section>
                  <section className="bodyContainer">
                        <Form />
                  </section>
            </div>
      );
}