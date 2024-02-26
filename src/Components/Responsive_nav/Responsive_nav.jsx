import React from 'react'
import logo from "../Assets/logo.svg"
import "./Responsive_nav.css"
import { FaWallet } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Mobile_offcanvas from '../Mobile_offcanvas/Mobile_offcanvas';

export default function Responsive_nav() {
  return (
    <div className='container py-3 d-block  d-lg-none'>
    <div className="mobile_nav_content">
    <div className='mobile_logo d-flex gap-2 align-items-center'>

        <img className='mobile_logo' src={logo} alt="" />
        <span className='text-dark fw-bold'>Opensea</span>
        <div>

        <button className='mbli_conc'> <FaWallet /><p className=' text-truncate mb-0'> Connect wallet </p></button>
        </div>

<div className='d-flex align-items-center'>
<CiSearch size={30} />
{['end',].map((placement, idx) => (
        <Mobile_offcanvas key={idx} placement={placement} name={placement} />
      ))}
</div>

    </div>
    </div>
    </div>
  )
}
