import React, { useState } from "react";

import logo from "../Assets/logo.png";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillGithub,
  AiOutlineSolution,
  AiOutlineHome,
  AiOutlineBarChart,
  AiOutlineUser,
  AiOutlineThunderbolt,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState<boolean>(false);
  const [navColour, updateNavbar] = useState<boolean>(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Nav.Link as={Link} to="/">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Nav.Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : true);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{marginRight:0,marginLeft:'auto'}}>
          <Nav.Item>
            <Nav.Link
              href="https://info.quickswap.exchange/pair/0xdc52291e2387e26081f43faf11808d0493990715"
              onClick={() => updateExpanded(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineBarChart style={{ marginBottom: "2px" }} /> Polygon Analytic
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="https://polygonscan.com/token/0x4fa43a983466dda2fca21dd19c4456a2b1c1b857"
              onClick={() => updateExpanded(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineSolution style={{ marginBottom: "2px" }} /> Explorer
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="https://github.com/pengchew/Burner-Project"
              onClick={() => updateExpanded(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub style={{ marginBottom: "2px" }} /> Github
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="fork-btn">
              <Button
                href="https://quickswap.exchange/#/swap?outputCurrency=0x4fa43a983466dda2fca21dd19c4456a2b1c1b857"
                target="_blank"
                className="fork-btn-inner"
              >
                <AiOutlineThunderbolt style={{ fontSize: "1.2em" }} />{"Buy Token  "}
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
