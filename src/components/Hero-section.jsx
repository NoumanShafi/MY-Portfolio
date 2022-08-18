import React from "react";
import image from "../images/Nouman.png"
import { useGlobleContext } from "./context";
export default function Hero() {
    const {HireBtn} = useGlobleContext()
    return (
        <section  className="color">
        <div className="container">
            <div className="left-side fade-leftside">
                <h1>Nouman Shafi</h1>
                <p>Hello! i Am a software developer and here is my portfolio website. Here you’ll learn about my journey as a software developer.</p>
                <button className="hire-me-btn" onClick={HireBtn}>Hire me</button>

            </div>
            <div className="right-side fadeup ">
                <img src={image} alt="Human" className="main-images" />
            </div>
        </div>
        </section>
    )
}