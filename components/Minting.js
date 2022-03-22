import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { ethers, utils } from "ethers";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Modal, Button } from 'react-bootstrap';
import Earlysup from '../utils/Earlysup.json';
const CONTRACT_ADDRESS = '0xd3A3F2Be9FB936479ed5370D085bA4b6f1e29487';
const contractABI = Earlysup.abi;
import { isMobile, browserName } from "react-device-detect";

const Minting = () => {
  const [loader, setLoader] = useState(false);
  // const [newTxId, setNewTxId] = useState(null);
  const [error, setError] = useState("");
  const [currentAccount, setCurrentAccount] = useState(0);
  const [chainIdOk, setChainIdOk] = useState(false);
  const [mintingProcess, setMintingProcess] = useState(0);
  const [modalShow, setModalShow] = useState(false);

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        //alert("Make sure you have metamask!");
        return;
      } else {
        //console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({
        method: "eth_accounts"
      });

      if (accounts.length !== 0) {
        const account = accounts[0];
        setCurrentAccount(account);
        setMintingProcess(1);
        setupEventListener();
        checkIfChainIsCorrect();
      } else {
        // shows connect wallet button
      }
    } catch (error) {
      console.log(new Error(error));
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Make sure you have metamask!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      setMintingProcess(1);
      setupEventListener();
      checkIfChainIsCorrect();
    } catch (error) {
      setError(error.data.message);
    }
  };

  const handleDisconnect = async () => {
    //console.log("Disconnecting MetaMask...");
    setCurrentAccount("");
  };

  const checkIfChainIsCorrect = async () => {
    try {
      const { ethereum } = window;
      const chainId = await ethereum.request({ method: "eth_chainId" });
      const correctChainId = utils.hexValue(137);
      if (chainId !== correctChainId) {
        setChainIdOk(false);
        setMintingProcess(1);
      } else {
        setChainIdOk(true);
        setMintingProcess(2);
      }
    } catch (error) {
      setError(error.data.message);
    }
  };

  // > Funcion que permite escuchar los eventos del contrato.
  const setupEventListener = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          Earlysup.abi,
          signer
        );

        // > Capturo el evento
        // TODO: mostrar el tokenID.
        connectedContract.on("Transfer", (from, to, tokenId) => {
          // setNewTokenId(tokenId.toNumber());
          //console.log(from, tokenId.toNumber());
        });
        //console.log("Setup event listener!");
      } else {
        //console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      setError(error.data.message);
    }
  };

  const changeNetwork = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: utils.hexValue(137) }], // Hexadecimal version of 137
      });
    } catch (error) {
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: utils.hexValue(137), // Hexadecimal version of 137
                chainName: "Polygon",
                nativeCurrency: {
                  name: "MATIC",
                  symbol: "MATIC",
                  decimals: 18,
                },
                rpcUrls: [
                  "https://rpc-mainnet.maticvigil.com",
                ],
                blockExplorerUrls: ["https://polygonscan.com/"],
                iconUrls: [""],
              },
            ],
          });
        } catch (addError) {
          setError(addError.data.message);
        }
      }
    }
  };

  const mintEarlySup = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        // > Un "provider" es lo que usamos para comunicarnos con los nodos de Ethereum.
        // En este caso usamos nodos que Metamask proporciona en segundo plano para enviar/recibir datos de nuestro contrato implementado.
        const provider = new ethers.providers.Web3Provider(ethereum);
        // > info: https://docs.ethers.io/v5/api/signer/#signers
        const signer = provider.getSigner();
        // > Crea la conexión con nuestro contrato
        const connectedContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          contractABI,
          signer
        );
        const price = await connectedContract.price();

        //console.log(ethers.utils.formatEther(price));
        //console.log("Going to pop wallet now to pay gas...");
        const nftTxn = await connectedContract.mint({ value: price });
        //console.log("Minting...please wait.");
        setMintingProcess(3);
        await nftTxn.wait();
        // setNewTxId(nftTxn.hash);
        // console.log(
        //   `Minted, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
        // );
        setMintingProcess(4);
      } else {
        //console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      setError(error.data.message);
    }
  };
  const MintingModal = (props) => {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="text-black text-center minting-modal"
      >
        <Modal.Header closeButton className="bg-light">
          <Modal.Title className="w-100" id="contained-modal-title-vcenter">
            {isMobile && (
              <p className="m-0">Sorry, desktop only</p>
            )}
            {(mintingProcess === 0 && !isMobile) && (
              <p className="m-0">Step 1 of 3</p>
            )}
            {(mintingProcess === 1 && !isMobile) && (
              <p className="m-0">Step 2 of 3</p>
            )}
            {(mintingProcess === 2 && !isMobile) && (
              <p className="m-0">Step 3 of 3</p>
            )}
            {(mintingProcess === 3 && !isMobile) && (
              <p className="m-0">Minting...</p>
            )}
            {(mintingProcess === 4 && !isMobile) && (
              <p className="m-0">Congratulations!</p>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light">
          {isMobile && (
            <p className="m-0">Early Supporter is only accessible on desktop</p>
          )}
          {(mintingProcess === 0 && !isMobile) && (
            <>
              <p>To start you need to connect your wallet</p>
              <small>You will need 10 Matic in your account to mint our Early Supporter NFT.</small>
              <p className="text-danger mt-3">{error}</p>
            </>
          )}
          {(mintingProcess === 1 && !isMobile) && (
            <>
              <p>You must be connected to Polygon Network</p>
              <small>BeatBlox operates on the Polygon network, a popular Ethereum L2 solution. Metamask does not have this network configured by default. Click the following button to set it up.</small>
              <p className="text-danger mt-3">{error}</p>
            </>
          )}
          {(mintingProcess === 2 && !isMobile) && (
            <>
              <p>You are ready.<br/>Become part of BeatBlox now!</p>
              <small>Early Supporter NFT - 10 MATIC</small>
              <p className="text-danger mt-3">{error}</p>
            </>
          )}
          {(mintingProcess === 3 && !isMobile) && (
            <>
              <p>Please wait a few seconds</p>
              <small>
                The transaction should be confirmed soon.<br/>
                You can <a href="https://metamask.zendesk.com/hc/en-us/articles/360015489251-How-to-speed-up-or-cancel-a-pending-transaction">speed up</a> your transaction on Metamask.
              </small>
              <p className="text-danger mt-3">{error}</p>
            </>
          )}
          {(mintingProcess === 4 && !isMobile) && (
            <>
              <p>Welcome to BeatBlox!</p>
              <small>Thank you for supporting our community!</small>
              <p className="text-danger mt-3">{error}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer className="bg-light justify-content-center">
          {isMobile && (
            <Button onClick={props.onHide} className="btn bg-black text-white rounded-pill">Back</Button>
          )}
          {(mintingProcess === 0 && !isMobile) && (
            <Button onClick={() => connectWallet()} className="bg-black text-white rounded-pill">Connect to Metamask</Button>
          )}
          {(mintingProcess === 1 && !isMobile) && (
            <Button onClick={() => changeNetwork()} className="bg-black text-white rounded-pill">Add Polygon Network</Button>
          )}
          {(mintingProcess === 2 && !isMobile) && (
            <Button onClick={() => mintEarlySup()} className="bg-black text-white rounded-pill">MINT!</Button>
          )}
          {(mintingProcess === 3 && !isMobile) && (
            <Button className="btn bg-black text-white rounded-pill" disabled>MINTING...</Button>
          )}
          {(mintingProcess === 4 && !isMobile) && (
            <Link href="/collection">
              <a className="btn bg-black text-white rounded-pill">View My Token</a>
            </Link>
          )}
        </Modal.Footer>
      </Modal>
    );
  }
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])
  1384
  return (
    <React.Fragment>
      <div className="container h-100">
        <div className="row section h-100 p-5">
          <div className="col-md-6 offset-md-6 d-flex flex-column justify-content-end justify-content-md-center">
            <div className="row">
              <div className='col'>
                <h1 className='p-0'>
                  BeatBlox<br />
                  Early Supporter <span className="text-outline">NFT</span>
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="mt-5">
                  <h4 className="text-uppercase mb-3">
                    Benefits
                  </h4>
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{
                      type: "progressbar",
                    }}
                    autoplay={{
                      delay: 5200,
                      disableOnInteraction: true,
                    }}
                    speed={800}
                    loop={true}
                    className="benefits-swiper"
                  >
                    <SwiperSlide>
                      <h4 className="m-0">
                        Early access to Closed Beta Marketplace.
                      </h4>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h4 className="m-0">
                        BeatBlox Collectable Credential Artwork.
                      </h4>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h4 className="m-0">
                        BeatBlox Wearable for Decentraland.
                      </h4>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h4 className="m-0">
                        BeatBlox Genesis Tokenized Track.
                      </h4>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h4 className="m-0">
                        Voting power for future governance system over platform catalog and activities.
                      </h4>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h4 className="m-0">
                        BeatBlox Airdrops. 
                      </h4>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h4 className="m-0">
                        Membership for BeatBlox Decentraland District Mountain Club.
                      </h4>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h4 className="m-0">
                        Access to early supporters only virtual events and meet & greets.
                      </h4>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h4 className="m-0">
                        Preferential access to future BeatBlox products.
                      </h4>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h4 className="m-0">
                        1 out of 1000 will randomly receive an extremely rare Credential.  
                      </h4>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h4 className="m-0">
                        Decentraland District Games and Installations credits. 
                      </h4>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h4 className="m-0">
                        Token compatible with every major marketplace for secondary sales, no commission added. 
                      </h4>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="row">
              <div className='col-md-4'>
                <button className="mt-3 btn btn-lg btn-light rounded-pill d-block" onClick={() => setModalShow(true)}>
                  Mint Early Supporter
                </button>
                {/* <h3 className="mt-4">
                  <Countdown date='2022-03-15T00:00:00' />
                </h3> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <MintingModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
    
  )
};

export default Minting;