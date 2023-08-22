import React from "react";
import Fullpage, {FullpageSection, FullPageSections, FullpageNavigation, FullpageNumber} from "@ap.cx/react-fullpage";
import Header from "./Header.jsx";
import HomePage from "./HomePage.jsx";
import SkillsPage from "./SkillsPage.jsx";
import Projectpage from "./projectpage.jsx";
import ContactPage from "./contactPage.jsx";
import './assets/css/homepage.css'

export default function FullPageScroll(){
    const pageSyles={backgroundColor:"#141416"};

    return(
       <Fullpage>
           <FullpageNavigation itemStyle={{ backgroundColor: "white",cursor:"pointer"}}/>
           <FullPageSections>
               <FullpageSection style={pageSyles}>
                   <Header/>
                   <HomePage/>
               </FullpageSection>
               <FullpageSection style={pageSyles}>
                   <Header/>
                   <SkillsPage/>
               </FullpageSection>
               <FullpageSection style={pageSyles}>
                   <Header/>
                   <Projectpage/>
               </FullpageSection>
               <FullpageSection style={pageSyles}>
                       <Header/>
                       <ContactPage/>
               </FullpageSection>
           </FullPageSections>
       </Fullpage>
    )
}