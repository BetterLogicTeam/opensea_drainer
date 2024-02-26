import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";

export default function Mobile_offcanvas({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
    
    <>
      <Button  onClick={handleShow} className="me-2 mobss">
      <FaBars  className='text-dark' size={30} />
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        
        <Offcanvas.Body>
      <Link className='text-decoration-none' to="airdrop">   <p className=' mobile_links' onClick={handleClose}>Drop</p></Link>
         <p className=' mobile_links' onClick={handleClose}> Create</p>
         <p className=' mobile_links' onClick={handleClose}> Stats</p>
      <IoMdClose className='close_btn_here' onClick={handleClose} />

        </Offcanvas.Body>
      </Offcanvas>
    </>
    
    </div>
  )
}
