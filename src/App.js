import React, { Component } from 'react'

import MyCarousel from "./portfolio/components/mycarousel/MyCarousel"
import NyNavbar from "./portfolio/components/mynavbar/MyNavbar"
import TitleMessage from "./portfolio/components/mycarousel/TitleMessage"


import About from "./portfolio/pages/about/About"
import Skills from "./portfolio/pages/skills/Skills"
import Experience from "./portfolio/pages/experience/Experience"
import MyContact from "./portfolio/pages/contact/MyContact"
import Project from "./portfolio/pages/project/Project"



import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax ,Background} from "react-parallax";
import Container from "react-bootstrap/Container";


import background from "./portfolio/images/parallex/background.webp"




import "./App.css";
export class App extends Component {
  render() {
    return (
      <div className="App" style={{ position: "relative" }} >
        <NyNavbar/>
        <MyCarousel/>
        <TitleMessage/>
        
          <Parallax strength={300}>
            <Background>
            <img src={background} alt="background" />
            </Background>
            
              <Container className="container-box rounded">
                <Fade duration={500}>
                  <hr/>
                <About />
                </Fade>
              </Container>
           
          </Parallax>

        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <Skills />
          </Slide>
      </Container>
 
          <Container className="container-box rounded">
            <Slide bottom duration={500}>
              <hr />
              <Experience/>
            </Slide>
          </Container>
 
        {/* <Container className="container-box rounded"> */}
        <Fade duration={500}>
          <hr />  
          <Project/>
   
        
        </Fade>
      {/* </Container> */}
  
        <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <MyContact />
        </Fade>
      </Container>

  

      
       
        

        
      </div>
    )
  }
}



export default App
