import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import logo from "../Assets/logo.png";
import { FaUser } from "react-icons/fa";
import {AiOutlineMenu} from 'react-icons/ai'
import {RxCross2 } from 'react-icons/rx'

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="main_nav_bar">
        <Container>
          <Navbar.Brand href="#home" className="main_logo_part">
            <img src={logo} alt="" />
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          <span className="d-md-none" onClick={()=>setShow(!show)} >
        {
        
          show ? <><RxCross2 className='text-white fs-1' /> </>:<><AiOutlineMenu className='text-white fs-1'/></>
        }
        

        </span>
          <Navbar.Collapse id="responsive-navbar-nav" className={show ? "show":""}>
            <Nav className="m-auto">
              <Nav.Link href="#features" className="main_site_links">Community</Nav.Link>
              <Nav.Link href="#pricing" className="main_site_links">Marketplace</Nav.Link>
              <NavDropdown title={<span className="main_site_links"> Support</span>} id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#features" className="main_site_links">MEE Token</Nav.Link>

            </Nav>
            <Nav>
             <button className="login_btn"> Launch </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
