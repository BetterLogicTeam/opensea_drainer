import React from "react";
import "./Landing_page.css";
import elon from "../Assets/elon.png";


export default function Landing_page() {


  return (
    <div className="main_landing_page">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6   mt-4">
            <div className="landing_left_content">
              <h1 className="clr_text">AI + NFT</h1>
              <h2 className="clr_text">Mint your Imagination</h2>
              <p className="para_clr">
                Rocket Pool is the leading decentralised staking protocol for
                Ethereum
              </p>
              <div className="d-flex gap-2 ">
                <button className="outlined_btn_land clr_text">
                  Liquid staking
                </button>
                <button className="landing_btn">Node staking</button>
              </div>

              <div className="d-flex mb_view gap-2 mt-5 align-items-center">
                <div className="main_box_con">
                  <span className="numbeer">463,730</span>
                  <br />
                  <span className="create">Creators</span>
                </div>
                <div className="main_box_con mt-3 mt-md-0">
                  <span className="numbeer">463,730</span>
                  <br />
                  <span className="create">Creators</span>
                </div>
                <div className="main_box_con mt-3 mt-md-0">
                  <span className="numbeer">463,730</span>
                  <br />
                  <span className="create">Creators</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-md-0 mt-4">
            <img src={elon} className="round_img w-100 " alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
