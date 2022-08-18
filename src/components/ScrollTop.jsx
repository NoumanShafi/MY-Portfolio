import React from "react";
import {FaAngleDoubleUp} from "react-icons/fa"
import { useEffect } from "react";
import { useState } from "react";
export default function ScroolTop (){
    const [ShowBtn , setShowBtn] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll" , () =>{
            if(window.scrollY > 400){
                setShowBtn(true)


            }
            else{
                setShowBtn(false)
            }
        }) 
    },[])
    const ScrollTop = () => {
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        })
    }
    return (
       <>
{
    ShowBtn && <FaAngleDoubleUp className="arrow-btn" onClick={ScrollTop}/>
}
    
       </>
    )
}