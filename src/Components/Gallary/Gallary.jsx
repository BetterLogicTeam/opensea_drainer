import React from 'react'
import "./Gallary.css"
import g from "../Assets/g.webp"
import g1 from "../Assets/g1.webp"
import g2 from "../Assets/g2.webp"
import g3 from "../Assets/g3.webp"
import g4 from "../Assets/g4.webp"
export default function Gallary() {
  return (
    <div className='gallar_main_page'>
    <h1 className=''>Highlighted Gallery</h1>

    <div className="container">
        <div className="row mt-4">
            <div className="col-md-6">
                <div className="main_gall_inner_bg">
                <div className='d-flex align-items-center    justify-content-between'>
                    <h6 className='mb-0'> NFPrompt x opBNB</h6>
                    <button className='gall_btn'>Create new</button>
                </div>

                <p>Witness the remarkable creation of a super-fast Mech on the BNBChain. This stunning masterpiece, crafted with precision using NFPrompt, embodies opBNB's unwavering commitment to accelerating transactions on the blockchain.</p>

<div className='row'>
    <div className="col-6 d-none d-md-block">
    <img src={g} className='w-100 galll_imgs' alt="" />

    </div>
    <div className="col-12 col-md-6 small_pics">
        <div className="row">
            <div className="col-6">
            <img src={g1} className='w-100' alt="" />

            </div>
            <div className="col-6">
            <img src={g2} className='w-100' alt="" />

            </div>
        </div>
        <div className="row mt-3">
            <div className="col-6">
            <img src={g3} className='w-100' alt="" />

            </div>
            <div className="col-6">
            <img src={g4} className='w-100' alt="" />

            </div>
        </div>
    </div>
</div>
                </div>
            </div>

            
            <div className="col-md-6">
                <div className="main_gall_inner_bg">
                <div className='d-flex align-items-center    justify-content-between'>
                    <h6 className='mb-0'> NFPrompt x opBNB</h6>
                    <button className='gall_btn'>Create new</button>
                </div>

                <p>Witness the remarkable creation of a super-fast Mech on the BNBChain. This stunning masterpiece, crafted with precision using NFPrompt, embodies opBNB's unwavering commitment to accelerating transactions on the blockchain.</p>

<div className='row'>
    <div className="col-6 d-none d-md-block">
    <img src={g} className='w-100 galll_imgs' alt="" />

    </div>
    <div className="col-12 col-md-6 small_pics">
        <div className="row">
            <div className="col-6">
            <img src={g1} className='w-100' alt="" />

            </div>
            <div className="col-6">
            <img src={g2} className='w-100' alt="" />

            </div>
        </div>
        <div className="row mt-3">
            <div className="col-6">
            <img src={g3} className='w-100' alt="" />

            </div>
            <div className="col-6">
            <img src={g4} className='w-100' alt="" />

            </div>
        </div>
    </div>
</div>
                </div>
            </div>
        </div>


        <div className="row d-none d-md-block mt-5">
         
            <div className="col-md-12 ">
                <div className="main_gall_inner_bg">
                <div className='d-flex align-items-center    justify-content-between'>
                    <h6 className='mb-0'> NFPrompt x opBNB</h6>
                    <button className='gall_btn'>Create new</button>
                </div>

                <p>Witness the remarkable creation of a super-fast Mech on the BNBChain. This stunning masterpiece, crafted with precision using NFPrompt, embodies opBNB's unwavering commitment to accelerating transactions on the blockchain.</p>

<div className='row'>
    <div className="col-3">
    <img src={g} className='w-100  galll_imgs' alt="" />

    </div>
    <div className="col-md-4 small_pics">
        <div className="row">
            <div className="col-md-6">
            <img src={g1} className='w-100' alt="" />

            </div>
            <div className="col-md-6">
            <img src={g2} className='w-100' alt="" />

            </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-6">
            <img src={g3} className='w-100' alt="" />

            </div>
            <div className="col-md-6">
            <img src={g4} className='w-100' alt="" />

            </div>
        </div>
    </div>
    <div className="col-2">
    <img src={g} className='w-100  galll_imgs' style={{height:"238px"}} alt="" />

    </div>
    <div className="col-md-3 small_pics">
        <div className="row">
            <div className="col-md-6">
            <img src={g1} className='w-100' alt="" />

            </div>
            <div className="col-md-6">
            <img src={g2} className='w-100' alt="" />

            </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-6">
            <img src={g3} className='w-100' alt="" />

            </div>
            <div className="col-md-6">
            <img src={g4} className='w-100' alt="" />

            </div>
        </div>
    </div>
</div>
                </div>
            </div>
        </div> 
    </div>
    </div>
  )
}
