import "../css/Form.css";
import { useState } from "react";

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
        <form onSubmit={onSubmit}>
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
            <button type="submit">Submit</button>

        </form>
    );
}