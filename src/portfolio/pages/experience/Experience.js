import React, { Component } from 'react'

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_RNT from "../../images/experience/RNT.svg";
import Tilt from "react-tilt";

import "./experience.css"
export class Experience extends Component {
    render() {
        return (
            <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Jumbotron className="jumbo-style">
              <Container>
                <Tilt options={{ max: 10 }}>
                  <Card>
                    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                      <Card.Img variant="top" className="img-resize" src={L_RNT} alt="RNT logo" />
                    </Card.Header>
                    <Card.Body className="d-flex justify-content-center flex-column">
                      <div>
                        <Card.Text className="text-center style">
                          <strong className="body-title-style ">Python Developer</strong>
                          <br />
                          <strong>Role:</strong> Developer
                          <br/>
                          <ul className="text-left">
                            <li><strong>Developed &amp; enhanced</strong> multiple features with customizability option across web application.</li>
                            <li><strong>Performed</strong> CRUD operations on multiple databases to load/ remove data according 
                            to the business requirements.</li>
                          </ul>
                          <strong>Technology:</strong> Python, Django, MySQL, HTML, CSS
                          <br />
                          {/* <strong>Duration:</strong> July 2019 - July 2020 */}
                          <br/>
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Tilt>
              </Container>
            </Jumbotron>
          </div>
        )
    }
}

export default Experience
