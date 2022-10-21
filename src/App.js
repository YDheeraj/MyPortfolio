import React from "react";
import About from "./components/about/About";
import Achivement from "./components/achivements/Achivement";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";

const App=()=>{
    return(
        <div>
            <Header></Header>
            <Nav></Nav>
            <About></About>
            <Experience></Experience>
            <Portfolio></Portfolio>
            <Achivement></Achivement>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}


export default App;