import React,{useState,useEffect} from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}
function Dapp() {

  useEffect(() => {

  });



  return (
    <section>
      <Particle />
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row style={{}} >
              <Col md={12} style={{ height:330, backgroundColor: '' }}>
                <Row style={{ paddingBottom: 15 }} >
                  <Col style={{ paddingBottom: 15, height:30, backgroundColor: 'red' }} >
                  </Col>
                </Row>
                <Row style={{ marginTop:23,paddingBottom: 15 }} >
                  <Col style={{ paddingBottom: 15, height:30, backgroundColor: 'red' }} >
                  </Col>
                </Row>
                <Row style={{ marginTop:23,paddingBottom: 15 }} >
                  <Col style={{ paddingBottom: 15, height:30, backgroundColor: 'red' }} >
                  </Col>
                </Row>

              </Col>
            </Row>
          </Container>
        </Container>
    </section>
  );
}

export default Dapp;
