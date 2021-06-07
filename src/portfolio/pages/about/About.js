import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from "react-bootstrap/Button";

import profile from "../../images/profile/profile.JPG"
import "./About.css"

export class About extends Component {
    render() {
        return (
            <div id="about" className="about" >
                <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
                <Container>
                    <Row  className="pt-3 pb-5 align-items-center" >
                            {/* Profile Pic */}
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2 ">
                                <Image className="profile justify-content-end" alt="profile"  src={profile} thumbnail fluid />
                            </Row>
                        </Col>
                            {/* About Description  and Buttons*/}
                        <Col xs={12} md={6}>
                                    {/* Description */}
                            <Row className=" align-items-start p-2 my-details rounded">
                                Hi there! I am <strong>&nbsp;Balu Gobade</strong>
                                <br />
                                 I am a Python Developer  with  Python, Django, React.js and MySQL.
                                <br />
                                In 2018, I successfully completed my Engineering with specialization in 'Information Technology'.
                                <br />
                                Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                                <br />
                                I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                                <br /> <br/>
                                        {/* Buttons  */}
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                        <Button className="m-2" variant="outline-primary">
                                        Let's talk
                                        </Button>
                                        </a>
                                    </div>

                                    <div>
                                        <a href="https://drive.google.com/file/d/1GU1_j3w_EBfAedlXy3qVSp61LYCoXMwK/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-success">
                                        My Resume
                                        </Button>
                                        </a>
                                    </div>

                                    <div>
                                        <a href="https://github.com/gobadebr/" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-dark">
                                        GitHub
                                        </Button>
                                        </a>
                                    </div>

                                    <div>
                                        <a href="https://www.linkedin.com/in/balu-gobade/" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-info">
                                        LinkedIn
                                        </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>      
            </div>
        )
    }
}
export default About
