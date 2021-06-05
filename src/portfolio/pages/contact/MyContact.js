import React, { Component } from 'react'

import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./MyContact.css"

export class MyContact extends Component {
    render() {
        return (
            <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            <Jumbotron className="contact-jumbotron">
              <Row>
                <Col className="d-flex justify-content-center flex-wrap">
                  <div className="m-2">
                    <a href="mailto:gobadebr@gmail.com" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline-danger" title="gobadebr@gmail.com">
                        <i className="fas fa-envelope-square"></i> Email Me
                      </Button>
                    </a>
                  </div>
                  <div className="m-2">
                    <a href="https://www.linkedin.com/in/balu-gobade/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline-primary" title="Visit my LinkenIn">
                        <i className="fab fa-linkedin"></i> LinkedIn
                      </Button>
                    </a>
                  </div>
                <div>
                    <a href="https://wa.me/+917387938233" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-success" title="Message Me">
                        <i className="fa fa-whatsapp" aria-hidden="true"></i> WhatsApp
                        </Button>
                    </a>
                </div>

                 <div className="m-2">
                    <a href="tel:+917387938233" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline-primary" title="+91 7387938233">
                        <i className="fas fa-phone-alt"></i> Call Now
                      </Button>
                    </a>
                  </div>
                  <div className="m-2">
                    <a href="https://github.com/gobadebr/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline-dark" title="My other projects">
                        <i className="fab fa-github-square"></i> GitHub
                      </Button>
                    </a>
                  </div>  
                  <div className="m-2">
                    <a href="https://twitter.com/balu_gobade/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline-info" title="Tweets are welcomed!">
                        <i className="fab fa-twitter"></i> Twitter
                      </Button>
                    </a>
                  </div>  
                </Col>
              </Row>
            </Jumbotron>
          </div>
         
        )
    }
}

export default MyContact
