import React from "react";
import { FaFacebook, FaWhatsapp, FaLinkedin, FaSkype } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="footer color">
            <h3>My social media links</h3>
            <div className="social-links">
                <a href="https://web.facebook.com/profile.php?id=100042630366321" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://www.linkedin.com/in/nouman-shafi/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://join.skype.com/invite/xk3hIwERHpOc" target="_blank" rel="noopener noreferrer"><FaSkype /></a>
                <a href="https://wa.me/+923166505187"target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>


            </div>
        </footer>
    )
}