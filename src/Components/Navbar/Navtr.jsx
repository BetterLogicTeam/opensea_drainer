import React, { useEffect, useState } from "react";
import "./Navtr.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { BiSearchAlt2 } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";

import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdVisibility } from "react-icons/md";
import { BsGrid3X3 } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import { Link } from "react-router-dom";
import logo from "../Assets/logo.svg"
// import Profile_modal from "../Profile_modal/Profile_modal";
// import Wallet_offcanvas from "../Wallet_offcanvas/Wallet_offcanvas";
// import Wallet_ofcanvas_nav from "../Wallet_offcanvas_nav/Wallet_ofcanvas_nav";

function Navtr() {
  const [modalShow, setModalShow] = React.useState(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [navColor, setnavColor] = useState("#ffffff");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#ffffff") : setnavColor("#ffffff");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <div className="nav_conditional z_index_nav">
      <div className=" ">
        <div className="container-fluid p-0 pil_er ">
          <div className="row m-0 p-0 nav-back">
            <div className="col-lg-12 p-0">
              <Navbar
                collapseOnSelect
                expand="lg"
                className="nav-back text-dark "
                style={{
                  backgroundColor: navColor,

                  transition: "1s",
                }}
              >
                <Container fluid className=" py-2 real_main">
                  <Navbar.Brand href="#home" className="main_logo">
                    <Link to="/" className="text-decoration-none ">
                      <div className="d-flex align-items-center gap-3">
                        <img
                         src={logo}
                          alt="opensea"
                          className="lo_pi"
                        />
                        <h5 className="open  mb-0 ">OpenSea</h5>
                      </div>
                    </Link>
                  </Navbar.Brand>

                  <Nav.Link href="#pricing" className=" for_bol">
                    <Link
                      // to="/airdrop"
                      className=" text-decoration-none text-dark"
                    >
                      {" "}
                      Drops
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#pricing" className=" for_bol">
                    <Link
                      // to=""
                      className=" text-decoration-none text-dark"
                    >
                      {" "}
                      Create
                    </Link>
                  </Nav.Link>

                  <div className="stats">
                    <button className="stats-dropbtn text-dark for_bol">
                      Stats
                    </button>
                    <div className="stats-content text-start">
                      <a href="#" className="border-bottom">
                        Rankings
                      </a>
                      <a href="/Activity" className="border-bottom">
                        Activity
                      </a>
                    </div>
                  </div>

                  <Nav className="m-0 sea_nav_search_upper">
                    <form action="/action_page.php" className="main_ch_bar">
                      <div className="d-flex align-items-center">
                        <BiSearchAlt2 className="inside_serch " />
                      </div>
                      <Form.Control
                        type="search"
                        placeholder="Search items, colloections, and accounts"
                        className="sbar forM"
                        aria-label="Search"
                      />
                      <div className="slg forM">/</div>
                    </form>
                  </Nav>

                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav" className="rit ">
                    <ul className="min_ul ">
                      <div className="m-0 p-0">
                        <div className="in_edsr colomo"></div>
                      </div>

                      {/* icon list */}
                      <div>
                        <div className="ico_box for_cen">
                          <div className="accoutn d-flex align-items-center">
                            <div className="wallet d-flex gap-3 align-items-center pe-4">
                              {/* <>
                                {["end"].map((placement, idx) => (
                                  <Wallet_ofcanvas_nav
                                    className="new_wallet"
                                    key={idx}
                                    placement={placement}
                                    name={placement}
                                  />
                                ))}
                              </> */}
                              <p class="cwallt m-0">Connect Wallet</p>
                            </div>

                            <li>
                              <div className="icon">
                                <button
                                  className="icon-dropbtn "
                                  onClick={() => setModalShow(true)}
                                >
                                  <RiAccountCircleLine className="account_mark" />
                                </button>
                                <div className="icon-content text-dark text-start">
                                  {/* <Profile_modal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                  /> */}
                                  <Link
                                    // to="mai_profile"
                                    className="text-decoration-none"
                                  >
                                    <a href="#" className="border-bottom">
                                      <BsFillPersonFill className="oci_F fs-5 me-3" />{" "}
                                      Profile
                                    </a>
                                  </Link>
                                  <a href="#" className="border-bottom">
                                    <MdOutlineFavoriteBorder className="oci_F fs-5 me-3" />
                                    Favourites
                                  </a>
                                  <a href="#" className="border-bottom">
                                    <MdVisibility className="oci_F fs-5 me-3" />
                                    Watch List
                                  </a>
                                  <Link
                                    // to="/collection_front_page"
                                    className="text-decoration-none"
                                  >
                                    <a href="#" className="border-bottom">
                                      <BsGrid3X3 className="oci_F fs-5 me-3" />
                                      My Collections
                                    </a>
                                  </Link>

                                  <Link
                                    // to="/main_create_page"
                                    className="text-decoration-none tdn"
                                  >
                                    {" "}
                                    <a href="#" className="border-bottom">
                                      <MdEdit className="oci_F fs-5 me-3" />
                                      Create
                                    </a>{" "}
                                  </Link>
                                  <Link
                                    // to="seeting_pro_main"
                                    className="text-decoration-none tdn"
                                  >
                                    {" "}
                                    <a href="#" className="border-bottom">
                                      <IoMdSettings className="oci_F fs-5 me-3" />
                                      Settings
                                    </a>{" "}
                                  </Link>
                                  <a href="#" className="border-bottom">
                                    <MdLanguage className="oci_F fs-5 me-3" />
                                    Language
                                  </a>
                                  <a href="#" className="nght tdn">
                                    <FaMoon className="oci_F fs-5 me-3" />
                                    Night Mode
                                  </a>
                                </div>
                              </div>
                            </li>
                          </div>

                          <div className="cart d-flex align-items-center ms-4">
                            <li>
                              <div>
                                {/* <>
                                  {" "}
                                  {["end"].map((placement, idx) => (
                                    <Wallet_offcanvas
                                      key={idx}
                                      placement={placement}
                                      name={placement}
                                    />
                                  ))}
                                </> */}
                                <FaShoppingCart />
                              </div>
                            </li>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navtr;
