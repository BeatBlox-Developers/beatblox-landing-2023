import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation as NavSwiper, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navigation from "../components/Navigation";
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
import { Web3 } from "web3";

// // Import your NFT contract ABI and address on Polygon
import NFTContractABI from "../public/files/NFTContractABI.json";
const NFTContractAddress = "0xd3A3F2Be9FB936479ed5370D085bA4b6f1e29487";

// Polygon RPC URL
const polygonRpcUrl = "https://rpc-mainnet.maticvigil.com";

const EarlySupporterNFT = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = "auto";
    };
  }, []);

  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [nftContract, setNFTContract] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const mintNFT = async () => {
    const web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.enable();
    } catch (error) {
      alert("You need to allow MetaMask.");
    }
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    console.log("ABI", NFTContractABI);
    try {
      const contract = new web3.eth.Contract(
        NFTContractABI,
        NFTContractAddress
      );
      const result = await contract.methods.mint(account).send({
        from: account,
      });

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navigation />
      <div
        className="early-supporter container"
        style={{ overflow: "hidden", height: "100vh" }}
      >
        <video
          autoPlay={true}
          controls={false}
          loop
          muted
          src="/videos/early-supporters.mp4"
          type="video/mp4"
          className="bg-video"
        ></video>
        <div className="row section h-100 p-5 ">
          <div
            className="col-md-6 offset-md-6 d-flex flex-column justify-content-center"
            style={{ zIndex: 2 }}
          >
            <div className="row" style={{ marginTop: "4.5rem" }}>
              <div className="col">
                <h1 className="p-0">
                  BeatBlox
                  <br />
                  Early Supporter <a className="nft-label">NFT</a>
                </h1>
              </div>
            </div>
            <div className="row py-5" style={{ height: "fit-content" }}>
              <div className="col">
                <div className="rounded-3 bg-gray p-2">
                  <h4 className="text-uppercase benefits">Benefits</h4>
                  <Swiper
                    modules={[NavSwiper, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    navigation
                    className="benefits-swiper"
                  >
                    <SwiperSlide>
                      <h4 className="mx-5">
                        Early access to Closed Beta Auction House.
                      </h4>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h4 className="mx-5">
                        BeatBlox Collectable Credential Artwork.
                      </h4>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h4 className="mx-5">
                        BeatBlox Wearable for Decentraland.
                      </h4>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h4 className="mx-5">
                        BeatBlox Genesis Tokenized Track.
                      </h4>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h4 className="mx-5">
                        Voting power for future governance system over platform
                        catalog and activities.
                      </h4>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h4 className="mx-5">BeatBlox Airdrops.</h4>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h4 className="mx-5">
                        Membership for BeatBlox Decentraland District Mountain
                        Club.
                      </h4>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h4 className="mx-5">
                        Access to early supporters only virtual events and meet
                        & greets.
                      </h4>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h4 className="mx-5">
                        Preferential access to future BeatBlox products.
                      </h4>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h4 className="mx-5">
                        1 out of 1000 will randomly receive an extremely rare
                        Credential.
                      </h4>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h4 className="mx-5">
                        Decentraland District Games and Installations credits.
                      </h4>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h4 className="mx-5">
                        Token compatible with every major marketplace for
                        secondary sales, no commission added.
                      </h4>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: "" }}>
              <div className="col-md-4 w-100">
                <h3 className="" style={{ width: "100%" }}>
                  <button className="btn-mint" onClick={mintNFT}>
                    Mint Early Supporter
                  </button>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EarlySupporterNFT;
