import React from 'react'
import "./Started.css"
import start_img from "../Assets/systemFeature.png"

export default function Started() {
  return (
    <div className='main_start_page'>
    <div className="container">
        <h1 className='main_them_heading'>Get Started</h1>
        <div className="row align-items-center">
            <div className="col-md-4">
                <div className="start_box">
                    <h1 className='start_box_head'>Sign Up</h1>
                    <ul className='main_start_list ps-0'>
                        <li>Seedless Experience - Effortless onboarding process for Web2 users</li>
                        <li>Gasless Experience - Encourage Web2 users to engage and explore AI on Web3</li>
                        <li>Seedless Experience - Effortless onboarding process for Web2 users</li>
                    </ul>
                </div>
                <div className="start_box mt-4">
                    <h1 className='start_box_head' style={{color:"rgb(72, 222, 221)"}}>Mint</h1>
                    <ul className='main_start_list ps-0'>
                        <li>Seedless Experience - Effortless onboarding process for Web2 users</li>
                        <li>Gasless Experience - Encourage Web2 users to engage and explore AI on Web3</li>
                        {/* <li>Seedless Experience - Effortless onboarding process for Web2 users</li> */}
                    </ul>
                </div>
            </div>
            <div className="col-md-4 d-none d-md-block">
                <img className='w-100' src={start_img} alt="" />
            </div>
            <div className="col-md-4">
                <div className="start_box">
                    <h1 className='start_box_head' style={{color:"rgb(124, 76, 241)"}}>Create</h1>
                    <ul className='main_start_list ps-0'>
                        <li>Seedless Experience - Effortless onboarding process for Web2 users</li>
                        <li>Gasless Experience - Encourage Web2 users to engage and explore AI on Web3</li>
                        <li>Seedless Experience - Effortless onboarding process for Web2 users</li>
                    </ul>
                </div>
                <div className="start_box mt-4">
                    <h1 className='start_box_head' style={{color:"rgb(56, 157, 236)"}}>List</h1>
                    <ul className='main_start_list ps-0'>
                        <li>Seedless Experience - Effortless onboarding process for Web2 users</li>
                        <li>Gasless Experience - Encourage Web2 users to engage and explore AI on Web3</li>
                        {/* <li>Seedless Experience - Effortless onboarding process for Web2 users</li> */}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
