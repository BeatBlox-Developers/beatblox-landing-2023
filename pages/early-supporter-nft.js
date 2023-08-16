import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation as NavSwiper, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Countdown from "react-countdown";
import Navigation from "../components/Navigation";
import { ethers } from "ethers";

const EarlySupporterNFT = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = "auto";
    };
  }, []);

  const handleMint = async () => {
    // Connect to MetaMask
    await window.ethereum.enable();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    // // Set up contract information
    // const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your deployed contract address
    // const contractAbi = [...]; // Replace with your contract ABI
    //
    // const contract = new ethers.Contract(contractAddress, contractAbi, signer);
    //
    // // Mint tokens
    // try {
    //     const tx = await contract.mintTokens(yourRecipientAddress, amountToMint);
    //     await tx.wait();
    //     console.log('Tokens minted successfully!');
    // } catch (error) {
    //     console.error('Error minting tokens:', error);
    // }
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
                  <button className="btn-mint" onClick={handleMint}>
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
