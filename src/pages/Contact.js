import Form from "../components/Form";
import "../css/Contact.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {
      return (
            <div className="contact">
                  <section>
                        <h1 className="heading">WANT TO GET IN TOUCH?</h1>
                        <h2>Leave a message or check out my social media. I'll get back to you soon!</h2>
                        <div className="icons">
                              <LinkedInIcon fontSize="large" color="#F7F7EA"/>
                              <GitHubIcon fontSize="large" color="#F7F7EA"/>
                        </div>
                  </section>
                  <section>
                        <Form />
                  </section>
            </div>
      );
}