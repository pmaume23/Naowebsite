import React from 'react';
import '../App.css';
import { Link } from 'react-scroll'
import Typed from "react-typed";
import Particles from 'react-particles-js';



function Hero() {
    return (
        <section id="hero" className="container">
            <div className="row">
                <div id="card" className="card text-center">
                    <div className="card-header">
                        <div className="profile-img"></div>
                        <div className="header-description">
                            <h1>Nao Sakai</h1>
                            <Typed className={"descriptionTyped"} strings={["Supply Planning Executive", "Rikkyo Graduate  with Bsc in Humanities"]} typeSpeed={40} backSpeed={50}
                                loop />
                            <div className="social-icons">
                                <span>
                                    <a href="https://www.linkedin.com/in/nao-sakai-0ab448208/" target="_"><i
                                        className="fa fa-linkedin"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">About me</h2>
                        <p className="card-text">
                        Hello , I am Nao, Supply Planning Executive, based in Japan,
                        I am passionate about traveling, discovering the world in the process.
                             
                    </p>
                        <a href="replace.ME.Later" target="_blank" id="download" className="btn  hero-btn">Download CV</a>
                        {/*<Link to="projects" spy={true} smooth={true} className="btn hero-btn">My Projects</Link>*/}
                    </div>
                </div>
            </div>
            <Link to="education" spy={true} smooth={true}>
                <div onclick="smoothScroll()" type="button" id="scroll-down" className="scroll-down">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Link>
        </section>
    );
}

export default Hero;
