import React, {useEffect} from "react";
import  sideDotsPicture from '../public/images/side-dots.png'
import {useTypewriter,Cursor} from "react-simple-typewriter";
import ComputerSVG from "./assets/ComputerSVG.jsx";
import Computer from '../public/images/computer.png'
import './assets/css/homepage.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
import "animate.css/animate.min.css";

export default function HomePage(){
    const [text]=useTypewriter({
        words:['Software Engineering Student.','Beginner Fullstack Developer.','Problem Solver.'],
        loop:{},
    });
    useEffect(() => {
        AOS.init({
            once: false,
            mirror: true
        });
    }, [])
    return(
        <div className="homepage-container">
            <div  className="hero">
                <div className="picture--decor">
                    <img className="computer" src={Computer}/>
                    <img className="dots-background" src={sideDotsPicture}/>
                </div>
                <div className="description"
                     data-aos="fade"
                     data-aos-duration="1500"
                >
                    <div>
                    <h2 className="Iam">My name is Chadha Essid I am a </h2>
                    <div className="words">
                        {text}
                        <Cursor/>
                    </div>
                    </div>

                    <p className="more">
                        Passionate about web development and computer science in general.
                        I love building websites that offer a fun user experience and a robust backoffice.
                    </p>
                </div>



            </div>
        </div>
    )
}