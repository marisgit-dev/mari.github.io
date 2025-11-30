/**
 * I Marita Aziga, 000368577 certify that this material is my original work. 
 * No other person's work has been used without due acknowledgement. 
 * I have not made my work available to anyone else.  
 */
import "../css/Form.css";
import "../App.css"
import { useState } from "react";

/**
 * Contact form for the site with social media icons.
 * I used web3forms to implement the submit for to my proton email.
 * 
 * @returns Contact Form
 */
export default function Form() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "8aae088e-0026-49a2-a1c8-67e4e163131b");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? alert("Email has been sent successfully!") : alert(`Error: ${data.success}`));
        window.location.reload();
    }

    return (
        <form onSubmit={onSubmit} className="bodyContainer">
            <p>{result}</p>
            <label>
                <h3>Name</h3>
                <input
                    type='text'
                    name='name'
                    required
                />
            </label>
            <label>
                <h3>Email</h3>
                <input
                    type='email'
                    name='email'
                    required
                />
            </label>
            <label>
                <h3>Message</h3>
                <textarea 
                    name='message' 
                    rows={10}
                    required 
                />
            </label>
            <button type="submit" className="submitButton">Submit</button>

        </form>
    );
}