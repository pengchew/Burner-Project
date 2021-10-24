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
              <h3>
                THE MOST  <strong className="main-name">DEFLATIONARY TOKEN</strong> CREATED
              </h3>
              <br/>
              <h5 style={{marginLeft:30}}>
                  -  <strong className="main-name">THE BURNER PROJECT</strong>
              </h5>
              <br/>
              <br/>
              <br/>
              <div style={{marginLeft:30}}>
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
