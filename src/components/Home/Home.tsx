import React,{useState,useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import About from "../../Assets/about.png";
import Particle from "../Particle";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <section>
      <Particle />
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                THE MOST
              </h1>
              <br/>
              <h1 className="heading-name">
                <strong className="main-name" style={{paddingLeft:50}}>DEFLATIONARY TOKEN</strong>
              </h1>
              <br/>
              <h1 className="heading-name" style={{marginLeft:100}}>
                CREATED  -  <strong className="main-name">THE BURNER PROJECT</strong>
              </h1>
              <br/>
              <br/>
              <br/>
              <br/>
              <div style={{marginLeft:100}}>
                <Typewriter
                  options={{
                    strings: [
                      "8% Burn per Transaction",
                      "LP Locked and Burnt Forever",
                      "One Total Supply"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </div>

            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={About} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
