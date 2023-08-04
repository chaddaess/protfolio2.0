import React from "react";
import ReactDOM from "react-dom/client";
import './assets/css/header.css'

export default function Header(){
    return(
        <div className="header">
            <div className="label">
                <svg className="bash"  viewBox="0 0 90 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="10" width="35" height="52" fill="#000000"></rect>
                    <path
                        d="M0 0V70.338H89.521V0H0ZM19.184 53.481L12.79 47.085L19.184 40.691L25.578 34.2971C25.578 34.2971 21.681 30.4 19.184 27.903C16.687 25.406 12.79 21.509 12.79 21.509L15.987 18.3115L19.184 15.114L28.7755 24.7055L38.367 34.2971L28.7755 43.889L19.184 53.481Z"
                        fill="aliceblue"></path>
                    <rect className="blinkit" x="45" y="44" width="29" height="8" fill="#000000"></rect>
                </svg>
                <p className="name">CHADHA</p>
            </div>
            <button className="contact-button">
                Contact
            </button>
        </div>
    )
}