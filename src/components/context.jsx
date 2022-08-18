import React from "react";
import { createContext, useContext, useState } from "react";
const AppContext = createContext()

const AppProvider = ({ children }) => {
    // getting NaveBar links
    const [SkillsLink, setSkillsLink] = useState(false)
    const [ProjectsLink, setProjectsLink] = useState(false)
    const [ContactLink, setContactLink] = useState(false)
    const [HireMe, setHireMe] = useState(false)
    const NaveSkills = () => {
        setSkillsLink(!SkillsLink)
        
    }

    const NaveProjects = () => {
        setProjectsLink(!ProjectsLink)

    }
    const NaveContact = () => {
        setContactLink(!ContactLink)

    }
    const HireBtn = () => {
        setHireMe(!HireMe)

    }
   
    


    return (
        <AppContext.Provider value={
            {
                NaveProjects,
                NaveSkills,
                NaveContact ,
                HireBtn,
                HireMe,
                ContactLink,
                ProjectsLink,
                SkillsLink,
                

            }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobleContext = () => {
    return useContext(AppContext)
}
export { AppProvider, useGlobleContext }