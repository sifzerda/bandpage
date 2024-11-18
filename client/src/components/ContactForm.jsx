import '../App.css';
import { useState } from 'react';

function ContactForm() {
    const [input, setInput] = useState({
        name: '',
        email: '',
        message: '',
        subject: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
        setSubmitted(true);
    };

    // First we check to see if "edit" prop exists. If not, we render the normal form
    // If the prop "edit" exists, we know to render the update form instead
    return (
// if submitted, display confirmation message
// if not not, handle submit
     <div className="form-container">
        {submitted ? (
          <div className="confirmation-message">
            <p>Thank you for your message!</p>
          </div>
        ) : (

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    placeholder="Name or contact reference..."
                    id="name"
                    name="name"
                    value={input.name}
                    className="contact-form-input"
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="Email address..."
                    id="email"
                    name="email"
                    value={input.email}
                    className="contact-form-input"
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="subject">Subject</label>
                <input
                    type="subject"
                    placeholder="Enter message subject..."
                    id="subject"
                    name="subject"
                    value={input.subject}
                    className="contact-form-input"
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    placeholder="Enter your message here"
                    name="message"
                    value={input.message}
                    className="contact-form-input"
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className='centered-button'>Submit</button>
        </form>
)}
        </div>
    );
}

export default ContactForm;
