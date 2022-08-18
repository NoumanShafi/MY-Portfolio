import React from "react";
import Html from "../images/Html.png"
import Css from "../images/Css.png"
import JS from "../images/JS.png"
import Bootstrap from "../images/boot.png"
import Img from "../images/project.png"
import reactjs from "../images/logo512.png"
import { useGlobleContext } from "./context";
import { useRef } from "react";

export default function Skills() {
    const Skillsref = useRef(null)
    const { SkillsLink, NaveSkills} = useGlobleContext()

    const Scroll = () => {
        window.scrollTo({
            top: Skillsref.current.offsetTop,
            behavior: "smooth"
        })
    }
    if (SkillsLink) {
        Scroll()
        NaveSkills()
       
    }


    return (
        <section ref={Skillsref}>
            <h1 className="tital">Skills</h1>
            <div className="container">

                <div className="left-side">
                    <p>I have a vast experience in the following web technologies:</p>
                    <div className="grid-images">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" ><img src={Html} alt="HTML" className="logo-img" /></a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" ><img src={Css} alt="CSS" className="logo-img" /></a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" > <img src={JS} alt="JAVASCRIP" className="logo-img" /></a>
                        <a href="https://getbootstrap.com/docs/5.2/getting-started/introduction/" target="_blank" rel="noopener noreferrer" > <img src={Bootstrap} alt="BOOTSTRAP" className="logo-img" /></a>
                        <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer" ><img src={reactjs} alt="reactjs" className="logo-img" /></a>

                    </div>

                </div>
                <div className="right-side skills">
                    <img src={Img} alt="Human" className="main-images" />
                </div>
            </div>
        </section>
    )
}