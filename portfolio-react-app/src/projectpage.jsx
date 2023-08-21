import React, {useRef, useEffect, useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sphereLarge from "../public/images/sphere_lg.png"
import sphereMedium from "../public/images/sphere_md.png"
import sphereSmall from "../public/images/sphere_sm.png"
import leafyInLaptop from "../public/images/leafymac .png"
import socialInLaptop from "../public/images/soccialsharemac.png"
import diamond from "../public/images/white_cube2.png"
import diamondPurple from"../public/images/diamond-purple.png"
import diamondOrange from "../public/images/diamond-orange.png"
import sphereOrange from "../public/images/sphere-orange.png";
import Slider from "react-slick";
import "./assets/css/projectpage.css";


export default function ProjectPage() {
    //slide on scroll horizentally
    const sliderRef = useRef();
    useEffect(() => {
        const handleScroll = (e) => {
            if (e.deltaY === 0) {
                e.preventDefault();
                if (Math.abs(e.deltaX) >10) {
                    if (e.deltaX > 0) {
                        sliderRef.current.slickNext();
                    } else if (e.deltaX < 0) {
                        sliderRef.current.slickPrev();
                    }
                }
            }
        };


        const sliderNode = sliderRef.current.innerSlider.list;
        sliderNode.addEventListener("wheel", handleScroll);

        return () => {
            sliderNode.removeEventListener("wheel", handleScroll);
        };
    }, []);

    let settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll:1,
        arrows: false,
        swipe: false,
        className: "carousel",
    };

    function handleMouseOver(arrow) {
        let sw=document.querySelector(".swiperight");
        sw.style.color="#8f249f"
        arrow.style.marginLeft="1em";
        arrow.style.transition=".5s ease-out"

    }

    function handleMouseLeave(arrow) {
        let sw=document.querySelector(".swiperight");
        sw.style.color=" #9c27b0"
        arrow.style.marginLeft="0";
    }

    return (
        <div className="container-projects">
            <div className="car">
                <Slider {...settings} ref={sliderRef}>
                    <div className="first-slide">
                        <img src={sphereSmall} className="sphere-small"/>
                        <div className="slide1-first-column">
                            <div className="description-first-slide"
                                 data-aos="fade-right"
                                 data-aos-duration="2000"
                            >
                                <h3>Portfolio & Previous Projects</h3>
                                <p>
                                    In the course of my first year of my web developing journey
                                    I worked on a number of academic and personal projects
                                    of which I handpicked a couple you can consult in the next slides<br></br>
                                    <span className="swipe--svg s1"
                                          onMouseEnter={()=>handleMouseOver(document.querySelector("#arrowFirst"))}
                                          onMouseLeave={()=>handleMouseLeave(document.querySelector("#arrowFirst"))}>
                                    <span className="swiperight">
                                    Swipe to the right
                                    </span>
                                    <svg className="arrow" id="arrowFirst" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                        <path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="#9C27B0">
                                        </path>
                                    </svg>
                                    </span>
                                </p>
                            </div>
                            <img src={sphereLarge} className="sphere-large"/>
                        </div>
                        <img src={sphereMedium} className="sphere-medium"/>

                    </div>
                    <div className="project-slide s2">
                        <div className="project-description d2">
                            <img  className="diamond" id="diamond2"
                                 src={diamondOrange}
                            />
                            <h3>Leafy Books</h3>
                            <p>
                                A website for bibliophiles to browse books,read or leave reviews and ratings and track
                                personal reading habits as well as interact with the reading community
                                <br></br>
                                <br></br>
                                <span style={{fontWeight:"700"}}>Built with</span>:PHP, vanilla Javascript & CSS
                                <br></br>
                                <br></br>
                                <span className="swipe--svg"
                                      onMouseEnter={()=>handleMouseOver(document.querySelector("#arrowSecond"))}
                                      onMouseLeave={()=>handleMouseLeave(document.querySelector("#arrowSecond"))}
                                >
                                    <span className="swiperight">
                                        <a href="https://github.com/medhedibenali/web-project" style={{color:"#EDA447"}}>Github repo</a>
                                    </span>
                                    <svg className="arrow git"  id="arrowSecond"xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                        <path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="#EDA447">
                                        </path>
                                    </svg>
                                </span>
                                <br></br>
                                <span className="swipe--svg"
                                      onMouseEnter={()=>handleMouseOver(document.querySelector("#arrowThird"))}
                                      onMouseLeave={()=>handleMouseLeave(document.querySelector("#arrowThird"))}
                                >
                                    <span className="swiperight" >
                                        <a href="https://youtu.be/TKCDEjQjP6k" style={{color:"#9C27B0",fontWeight:"550"}}>Watch a demo</a>
                                    </span>
                                    <svg className="arrow demo" id="arrowThird" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                        <path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="#9C27B0">
                                        </path>
                                    </svg>

                                </span>
                            </p>
                            <img className="diamond orange"
                                 src={diamondOrange}
                            />

                        </div>
                        <div className="image-desc">
                            <img className="project-image i2"
                                 src={leafyInLaptop}
                            />
                        </div>


                    </div>
                    <div className="project-slide s3">
                        <div className="project-description d3">
                            <img src={diamond} className="diamond white"/>
                            <h3>Social Share Hub</h3>
                            <p>
                                A website that allows Tv channels and Radio stations to automate the process of publishing articles
                                from their website to their social media accounts(Facebook,Linkedin and X-formerly Twitter)
                                <br></br>
                                <br></br>
                                <span style={{fontWeight:"700"}}>Built with</span>:Symfony, vanilla Javascript & CSS
                                <br></br>
                                <br></br>
                                <span className="swipe--svg"
                                      onMouseEnter={()=>handleMouseOver(document.querySelector("#arrowFourth"))}
                                      onMouseLeave={()=>handleMouseLeave(document.querySelector("#arrowFourth"))}
                                >
                                    <span className="swiperight" style={{color:"#EDA447",cursor: "not-allowed"}}>
                                    Github repo
                                    </span>
                                    <svg className="arrow git"  id="arrowFourth"xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                        <path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="#EDA447">
                                        </path>
                                    </svg>
                                </span>
                                <br></br>
                                <span className="swipe--svg"
                                      onMouseEnter={()=>handleMouseOver(document.querySelector("#arrowFifth"))}
                                      onMouseLeave={()=>handleMouseLeave(document.querySelector("#arrowFifth"))}
                                >
                                    <span className="swiperight" >
                                        <a href="https://youtu.be/V35oEi2EVhQ"style={{color:"#9C27B0",fontWeight:"550"}}>Watch a demo</a>
                                    </span>
                                    <svg className="arrow demo" id="arrowFifth" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                        <path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="#9C27B0">
                                        </path>
                                    </svg>
                                </span>
                            </p>

                        </div>
                        <div className="image-desc">
                        <img className="project-image i3"
                             src={socialInLaptop}
                        />
                            <img src={diamondPurple} className="diamond purple"/>


                        </div>
                    </div>
                    <div></div>


                </Slider>
            </div>
        </div>
    );
}
