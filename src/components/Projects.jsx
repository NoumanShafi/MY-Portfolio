import React from "react";
import Project1 from "../images/project1.png"
import Project2 from "../images/project2.png"
import Project3 from "../images/project3.png"
import Project4 from "../images/project4.png"
import { useRef } from "react";
import { useGlobleContext } from "./context";


export default function Projects() {
    const {ProjectsLink , NaveProjects} = useGlobleContext()
    const Projectsref = useRef(null)
    const Scroll = () => {
        window.scrollTo({
            top : Projectsref.current.offsetTop,
            behavior : "smooth"
        })
    }
    if(ProjectsLink){
        Scroll()
        NaveProjects()
    }
   
    return (
        <section className="color project_section" ref={Projectsref}>
            <div className="container projrct-container">
                <div className="tital">

                <h1>Projects</h1>
                <h3>Some of my projects include</h3>
                </div>
                <div className="project-list">
                    <div className="list-items">

                       <a href="https://project-lifeeasy.000webhostapp.com/" target="_blank" rel="noopener noreferrer"><img src={Project1} alt="projects-img" className="project-img" /><h2 className="project-image-heading">Live Life Simple</h2></a> 
                        
                    </div>
                    <div className="list-items">

                       <a href="https://noumanshafi.github.io/CockTailDB/" target="_blank" rel="noopener noreferrer"><img src={Project2} alt="projects-img" className="project-img" /><h2 className="project-image-heading">CockTailDB</h2>
                        </a> 
                        
                    </div>
                    <div className="list-items">

                       <a href="https://noumanshafi.github.io/Restaurant-Menu-App/" target="_blank" rel="noopener noreferrer"><img src={Project3} alt="projects-img" className="project-img" /><h2 className="project-image-heading">Menu App</h2></a> 
                        
                        
                    </div>
                    <div className="list-items">

                       <a href="https://reduxecommercestore.netlify.app/" target="_blank" rel="noopener noreferrer"><img src={Project4} alt="projects-img" className="project-img" /><h2 className="project-image-heading">Redux Store</h2></a> 
                        
                        
                    </div>
                </div>


            </div>
        </section>
    )
}