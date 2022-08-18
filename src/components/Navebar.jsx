import React, { useRef, useEffect, useState } from "react";

import { FaTimes, FaEllipsisV } from "react-icons/fa"
import { useGlobleContext } from "./context";

export default function Navebar() {
    const { NaveContact, NaveSkills, NaveProjects } = useGlobleContext()
    const [Togle, setTogle] = useState(false)
    const Linksref = useRef(null)

    function togle() {
        setTogle(!Togle)
        console.log(Togle)
    }
    useEffect(() => {
        if (Togle) {

            Linksref.current.style.height = "10rem"
        }
        else {
            Linksref.current.style.height = '0px'
        }


    }, [Togle])
    const ChangeValue = () => {
        NaveSkills()
        

    }


    return (
        <nav className="color">
            <div className="nave-center">

                <div className="nave-header fade-leftside">

                    <a href="/"><h1>Nouman Shafi</h1></a>

                    <button className="togle-btn" onClick={togle}>{Togle ? <FaTimes /> : <FaEllipsisV />}</button>
                </div>


                <div className="links-container fade-rightside" ref={Linksref}>

                    <div className="links" >
                        <ul>
                            <li onClick={() =>  ChangeValue()}>Skills</li>

                            <li onClick={() => NaveProjects()}>Projects</li>

                            <li onClick={() => NaveContact()}>Contact me</li>

                        </ul>

                    </div>
                </div>

            </div>


        </nav>
    )
}