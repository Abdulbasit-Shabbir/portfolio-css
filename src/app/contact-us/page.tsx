import React from "react";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaPinterest, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
export default function Contact() {
    return (
        <div className="contact--container">
            <h1 className="contact-heading">Contact Us</h1>
            <p className="contact-intro">
                We would love to hear from you! Whether you have a question, feedback, or just want to say hello,
                feel free to reach out. Fill out the form below or connect with us on social media.
            </p>

            <form>
                <div className="contact-form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required />
                </div>

                <div className="contact-form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" required />
                </div>

                <div className="contact-form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message"  placeholder="Your Message" required></textarea>
                </div>

                <button type="submit">Send Message</button>
            </form>

            <div className="social-icons">
            <FaFacebookF className="icon" />
            <FaGithub className="icon" />
            <FaLinkedinIn className="icon" />
            <FaTwitter className="icon" />
            
            </div>
        </div>
    );
}
