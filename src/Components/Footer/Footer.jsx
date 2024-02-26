import React from 'react'
import logo from "../Assets/logo.svg"
import "./Footer.css"
import { FaTwitter,FaDiscord,FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='main_footer'>
    <div className="container">
        <div className="row justify-content-between">
            <div className="col-md-5">
<div className="left_footer">
<div className='d-flex align-items-center gap-2'>

    <img src={logo} className='footer_logo' alt="" />
    <span className='text-white fw-bold'>opeansea</span>
</div>
    <div className='d-flex social_iCons gap-4'>
    <FaTwitter className='social_icons' />
    <FaDiscord className='social_icons' />
    <FaTelegramPlane className='social_icons' />
    </div>
    <p >Mint your Imagination into an exquisite masterpiece</p>
</div>
            </div>
            <div className="col-md-5">
            <div className="right_content d-flex flex-column flex-md-row gap-5">
            <div>

                <h5>Partnership</h5>
                <a href="" className='footer_links'>Giveaway Collaboration</a>
                <a href="" className='footer_links'>Art Theme Collaboration</a>
                <a href="" className='footer_links'>Apply for Mod</a>
                <a href="" className='footer_links'>Apply for Ambassador</a>
            </div>
            <div>

                <h5>Marketplace</h5>
                <a href="" className='footer_links'>Explore</a>
                <a href="" className='footer_links'>Create</a>
                <a href="" className='footer_links'>Earn</a>
                <a href="" className='footer_links'>Campaign</a>
            </div>
            <div>

                <h5>Resources</h5>
                <a href="" className='footer_links'>NFP Documentation</a>
                <a href="" className='footer_links'>Logo</a>
                <a href="" className='footer_links'>Terms of Service</a>
                <a href="" className='footer_links'>Privacy Policy</a>
            </div>
            </div>

            </div>
        </div>
    </div>
    
    </div>
  )
}
