import React,{useState,useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import About from "../../Assets/about.png";
import logo2 from "../../Assets/logo2.png";
import Particle from "../Particle";
import Typewriter from "typewriter-effect";
import Button from "react-bootstrap/Button";
import {
  AiFillGithub,
  AiOutlineSolution,
  AiOutlineHome,
  AiOutlineBarChart,
  AiOutlineUser,
  AiOutlineThunderbolt,
} from "react-icons/ai";

import axios from 'axios';


function Home() {
  const[supply,setsupply]=useState<any>();
  useEffect(()=>{
  },[]);

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

            <Col md={5} style={{}}>
              <img src={About} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-section2">
          <Row>
            <Col md={5} style={{  }}>
              <img src={logo2} style={{height:350}} />
            </Col>
            <Col md={6} className="home-header">
              <h3>
                <strong className="main-name">Total Circulation Supply:</strong>
              </h3>
              <br/>
              <h5 style={{}}>
                  <h1 style={{color:'white'}}>0.761294</h1><strong className="main-name">$Burner</strong>
              </h5>
              <br/>
              <br/>
              <br/>

            </Col>

          </Row>
      </Container>
    </section>
  );
}

export default Home;
