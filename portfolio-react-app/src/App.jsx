import React, {useEffect} from "react";
import ReactDOM from "react-dom/client";
import FullPage from "./FullPageScroll.jsx";
import './assets/css/App.css'
import FullPageScroll from "./FullPageScroll.jsx";
import AOS from 'aos';
import './assets/css/skillspage.css'

export default function App() {
    useEffect(() => {
        AOS.init({
            once: false,
            mirror: true
        });
    }, [])
    return(
        <>
            <FullPageScroll/>
        </>
    )
}

