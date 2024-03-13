import React from "react";
import "./Airdrop.css";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import airp from "../Assets/arp.avif";
import airp1 from "../Assets/arp1.avif";
import airp2 from "../Assets/arp2.avif";
import airp3 from "../Assets/arp3.avif";
import airp4 from "../Assets/arp4.avif";
import airp5 from "../Assets/arp5.avif";
import airp6 from "../Assets/arp6.avif";
import airp7 from "../Assets/arp7.avif";
import airp8 from "../Assets/arp8.avif";
import airp9 from "../Assets/arp9.avif";

import airppp from "../Assets/rext.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

export default function Airdrop() {
  const { open } = useWeb3Modal();
  const { chain } = useNetwork();
  const { chains, switchNetwork } = useSwitchNetwork();
  const { address } = useAccount();
  return (
    <div className="container airp_main">
      <>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper arp_slider"
        >
          <SwiperSlide>
            <img src={airp} className="airp_pics" alt="" />
            <div className="aip_conent">
              <h1>Dippins vans</h1>
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={airp1} className="airp_pics" alt="" />
            <div className="aip_conent">
              <h1>Dippins vans</h1>
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={airp2} className="airp_pics" alt="" />
            <div className="aip_conent">
              <h1>Dippins vans</h1>
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={airp3} className="airp_pics" alt="" />
            <div className="aip_conent">
              <h1>Dippins vans</h1>
             
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <img src={airp4} className="airp_pics" alt="" />
            <div className="aip_conent">
              <h1>Dippins vans</h1>
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={airp5} className="airp_pics" alt="" />
            <div className="aip_conent">
              <h1>Dippins vans</h1>
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={airp6} className="airp_pics" alt="" />
            <div className="aip_conent">
              <h1>Dippins vans</h1>
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={airp7} className="airp_pics" alt="" />
            <div className="aip_conent">
              <h1>Dippins vans</h1>
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={airp8} className="airp_pics" alt="" />
            <div className="aip_conent">
              <h1>Dippins vans</h1>
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={airp9} className="airp_pics" alt="" />
            <div className="aip_conent">
              <h1>Dippins vans</h1>
             
            </div>
          </SwiperSlide>
        </Swiper>
      </>

      <div className="arp_conns mt-4">
        <h1>New Offer received</h1>
        <p>
          A new offer has been made on one of your listings.Ensure you are
          connected to view the details.{" "}
          <span className="fw-bold">Learn More </span>
        </p>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button
          className="ant-btn main-btn login_btn"
          onClick={() =>
            address
              ? chain?.id == chains[0]?.id
                ? open()
                : switchNetwork?.(chains[0]?.id)
              : open()
          }
          type="button"
        >
          {/**/}
          <span>
            {address ? (
              chain?.id == chains[0]?.id || chain?.id == chains[1]?.id ? (
                address ? (
                  <>{`${address.substring(0, 6)}...${address.substring(
                    address.length - 4
                  )}`}</>
                ) : (
                  "Connect Wallet"
                )
              ) : (
                "Switch NewWork"
              )
            ) : (
              "Connect Wallet"
            )}
          </span>
        </button>
      </div>
      <div  >
      {/* <h3 className="text-dark text-2xl font-bold m  b-5"   >Tips:</h3> */}
            {/* <p>
              {" "}
              1. To ensure a smooth process, the community is able to check the
              Claim Page 30 minutes before Binance lists $NFP at 2023-12-27
              10:00 (UTC), and all eligible users can claim their $NFP airdrop
              20 minutes before the launch.{" "}
            </p>
            <p>
              {" "}
              2. The airdrop claiming window lasts for one calendar month from
              2023-12-27, 09:40 (UTC), until 2023-01-27, 09:40 (UTC).{" "}
            </p>
            <p>
              {" "}
              3. 10% of the total $NFP supply will be used as the initial
              airdrop for NFPrompt users.{" "}
            </p>
            <p>
              {" "}
              4.Web2 login accounts, and accounts that violate the community
              guidelines or are banned, are not eligible to claim the $NFP
              airdrop.{" "}
            </p>
            <p>
              {" "}
              5. As Season 2 kicks off, $cNFP obtained from the first season,
              before 2023-12-17, 00:00 (UTC) will be reset. This ensures a fair
              starting line for all participants in an exciting and fair Season
              2.{" "}
            </p> */}
      </div>
    </div>
  );
}
