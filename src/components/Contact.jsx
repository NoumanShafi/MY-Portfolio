import React from "react";
import ManChat from "../images/man standing on chats 1.png"
import { useRef } from "react";
import { FaPaperPlane } from "react-icons/fa"
import { useGlobleContext } from "./context";
import emailjs from "@emailjs/browser"
export default function Contact() {
    const { ContactLink, NaveContact, HireBtn, HireMe } = useGlobleContext()
    const Contactref = useRef(null)
    const Scroll = () => {
        window.scrollTo({
            top: Contactref.current.offsetTop,
            behavior: "smooth"
        })
    }
    if (ContactLink) {
        Scroll()
        NaveContact()
    }
    else if (HireMe) {
        Scroll()
        HireBtn()
    }
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_4p7n5gi',
            'template_jgbezhq',
            form.current, '--4P22M6TmanqCBGO')
            .then((result) => {
                console.log(result.text);
                alert("Sending your mail")
                e.target.reset();

            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className="section" ref={Contactref}>
            <h1 className="tital">Contact me</h1>
            <div className="container">
                <div className="imag">
                    <img src={ManChat} alt="chatt" className="main-images" />
                </div>
                <div className="form-area">

                    <form ref={form} onSubmit={sendEmail} className="form" >
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <button type="submit" className="send-btn" >Send <FaPaperPlane /></button>
                    </form>
                </div>

            </div>
        </section>
    )
}