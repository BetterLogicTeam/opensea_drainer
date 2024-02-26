import React from 'react'
import "./Newsroom.css"
import news1 from "../Assets/CT logo JP.svg"
import news2 from "../Assets/Cryptorank Logo.png"
import news3 from "../Assets/Digital-Journal.webp"

export default function Newsroom() {
  return (
    <div className='main_news_room'>
    <div className="container">
        <h1 className='main_them_heading'>Newsroom</h1>
        <div className="row mt-5">
            <div className="col-md-3">
            <div className="news_box">
            <img src={news1} className='news_img' alt="" />
            <p>NFPrompt: The first AI-powered NFT platform that mints your imagination on chain</p>

            <p className='date'>Jun 12th, 2023</p>

            </div>

            </div>
            <div className="col-md-3 mt-4 mt-md-0">
            <div className="news_box">
            <img src={news2} className='news_img' alt="" />
            <p>NFPrompt: The first AI-powered NFT platform that mints your imagination on chain</p>

            <p className='date'>Jun 12th, 2023</p>

            </div>

            </div>
            <div className="col-md-3 mt-4 mt-md-0">
            <div className="news_box">
            <img src={news3} className='news_img' alt="" />
            <p>NFPrompt: The first AI-powered NFT platform that mints your imagination on chain</p>

            <p className='date'>Jun 12th, 2023</p>

            </div>

            </div>
            <div className="col-md-3 mt-4 mt-md-0">
            <div className="news_box">
            <img src={news1} className='news_img' alt="" />
            <p>NFPrompt: The first AI-powered NFT platform that mints your imagination on chain</p>

            <p className='date'>Jun 12th, 2023</p>

            </div>

            </div>
        </div>
    </div>
    
    </div>
  )
}
