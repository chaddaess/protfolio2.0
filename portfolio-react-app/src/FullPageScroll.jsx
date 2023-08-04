import React from "react";
import Fullpage, {FullpageSection, FullPageSections, FullpageNavigation, FullpageNumber} from "@ap.cx/react-fullpage";
import Header from "./Header.jsx";
import HomePage from "./HomePage.jsx";
import './assets/css/homepage.css'

export default function FullPageScroll(){
    const pageSyles={backgroundColor:"#141416"};
    return(
       <Fullpage>
           <FullpageNavigation itemStyle={{ backgroundColor: "white" }}/>
           <FullPageSections>
               <FullpageSection style={pageSyles}>
                   <Header/>
                   <HomePage/>
               </FullpageSection>
               <FullpageSection style={pageSyles}>
                   <Header/>
                   <h1>Hi 2nd</h1>
               </FullpageSection>
               <FullpageSection style={pageSyles}>
                   <Header/>
                  <h1>Hi 3rd</h1>
               </FullpageSection>
           </FullPageSections>
       </Fullpage>
    )
}