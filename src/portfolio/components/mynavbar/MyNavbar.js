import React, { Component } from 'react'

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./MyNavbar.css"


export class MyNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="md"  variant="dark" fixed="top" className=" nav-theme justify-content-between">
                    <Navbar.Brand className="headem">
                        {/* <div > */}
                            <span> <i className="far fa-envelope"></i>&nbsp;gobadebr@gmail.com</span>
                            <span>&nbsp; <i className="fas fa-phone-alt"></i>&nbsp;7387938233</span>
                        {/* </div>                     */}
                    </Navbar.Brand> 
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#experience">Experience</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>    
             </div>
        )
    }
}
export default MyNavbar
