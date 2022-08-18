
import Hero from "./components/Hero-section";
import Navebar from "./components/Navebar";
import Skills from "./components/Skills-section";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScroolTop from "./components/ScrollTop";

export default function App() {

    return (

        <>
            <ScroolTop />
            <Navebar />
            <Hero />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>



    )

}