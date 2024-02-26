import React, { useEffect } from "react";
import "./System.css";
import cridet_img from "../Assets/creditsIcon.png";
import cnter from "../Assets/creditsSystem.svg";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";


export default function System() {
  const { open } = useWeb3Modal();
  const { chain } = useNetwork();
  const { chains, switchNetwork } = useSwitchNetwork();
  const { address } = useAccount();


  return (
    <div className="main_system_page">
      <div className="container">
        <h1 className="main_them_heading">$cNFP System</h1>
        <div className="row mt-4 align-items-center">
          <div className="col-md-3">
            <div className="crid_icons_box">
              <img className="icoN_size" src={cridet_img} alt="" />
              <h1>Daily Check-in</h1>
              <p>Earn $cNFP by minting, buying, and selling NFTs</p>
            </div>
            <div className="crid_icons_box">
              <img className="icoN_size" src={cridet_img} alt="" />
              <h1>Trade NFTs</h1>
              <p>Earn $cNFP by minting, buying, and selling NFTs</p>
            </div>
            <div className="crid_icons_box">
              <img className="icoN_size" src={cridet_img} alt="" />
              <h1>Theme Campaign</h1>
              <p>Earn $cNFP by minting, buying, and selling NFTs</p>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <img src={cnter} className="w-100" alt="" />
          </div>
          <div className="col-md-3">
            <div className="crid_icons_box">
              <img className="icoN_size" src={cridet_img} alt="" />
              <h1>Create NFTs</h1>
              <p>Earn $cNFP by minting, buying, and selling NFTs</p>
            </div>
            <div className="crid_icons_box">
              <img className="icoN_size" src={cridet_img} alt="" />
              <h1>Vote for NFTs</h1>
              <p>Earn $cNFP by minting, buying, and selling NFTs</p>
            </div>
            <div className="crid_icons_box">
              <img className="icoN_size" src={cridet_img} alt="" />
              <h1>Token Airdrop</h1>
              <p>Earn $cNFP by minting, buying, and selling NFTs</p>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <button
            onClick={() =>
              address
                ? chain?.id == chains[0]?.id
                  ? open()
                  : switchNetwork?.(chains[0]?.id)
                : open()
            }
            className="nft_more"
          >
            {address ? (
              chain?.id == chains[0]?.id || chain?.id == chains[1]?.id ? (
                address ? (
                  <>{`${address.substring(0, 6)}...${address.substring(
                    address.length - 4
                  )}`}</>
                ) : (
                  "connect wallet"
                )
              ) : (
                "Switch NewWork"
              )
            ) : (
              "Connect Wallet"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
