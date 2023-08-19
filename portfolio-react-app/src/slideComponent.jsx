import React from "react";
import projectInLaptop from "../public/images/macbook.png";


export default function SlideComponent() {

    function handleMouseOverSlide(arrow) {
        let sw=document.querySelector(".swiperight.svg");
        sw.style.color="#8f249f"
        arrow.style.marginLeft="1em";
        arrow.style.transition=".5s ease-out"

    }

    function handleMouseLeaveSlide(arrow) {
        let sw=document.querySelector(".swiperight.svg");
        sw.style.color=" #9c27b0"
        arrow.style.marginLeft="0";
    }
    return (
        <div className="project-slide s2">
            <div className="project-description d2">
                <h3>Leafy Books</h3>
                <p>
                    A website for bibliophiles to browse books,read or leave reviews and ratings and track
                    personal reading habits as well as interact with the reading community
                    <br></br>
                    <br></br>
                    <span style={{fontWeight: "700"}}>Built with</span>:PHP, vanilla Javascript & CSS
                    <br></br>
                    <br></br>
                    <span className="swipe--svg--slide"
                          onMouseEnter={() => handleMouseOverSlide(document.querySelector(".arrow.git"))}
                          onMouseLeave={() => handleMouseLeaveSlide(document.querySelector(".arrow.git"))}
                    >
                                    <span className="swiperight svg" style={{color: "#EDA447"}}>
                                    Github repo
                                    </span>
                                    <svg className="arrow git" xmlns="http://www.w3.org/2000/svg" height="24"
                                         viewBox="0 0 24 24" width="24">
                                        <path d="M0 0h24v24H0V0z" fill="none"></path><path
                                        d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="#EDA447">
                                        </path>
                                    </svg>
                                </span>
                    <br></br>
                    <span className="swipe--svg--slide"
                          onMouseEnter={() => handleMouseOverSlide(document.querySelector(".arrow.demo"))}
                          onMouseLeave={() => handleMouseLeaveSlide(document.querySelector(".arrow.demo"))}
                    >
                                    <span className="swiperight svg" style={{color: "#9C27B0", fontWeight: "550"}}>
                                    Watch a demo
                                    </span>
                                    <svg className="arrow demo" xmlns="http://www.w3.org/2000/svg" height="24"
                                         viewBox="0 0 24 24" width="24">
                                        <path d="M0 0h24v24H0V0z" fill="none"></path><path
                                        d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="#9C27B0">
                                        </path>
                                    </svg>
                                </span>
                </p>

            </div>
            <img className="project-image i2"
                 src={projectInLaptop}
            />
        </div>
    )
}