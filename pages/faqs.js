import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Faq.module.css";
import { Navbar, Nav, Container, Row, Col, Tab } from "react-bootstrap";
import Navigation from "../components/Navigation";

export default function Faqs() {
  return (
    <div className={styles.faq_container}>
      <Head>
        <title>BeatBlox - FAQs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="container not-fullscreen">
        <div className="row px-5 px-md-0">
          <div className="col-12">
            <Tab.Container defaultActiveKey="faq-1">
              <Row>
                <Col sm={3}>
                  <h3>Table of contents</h3>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="faq-1">What is BeatBlox?</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="faq-2">
                        What is BeatBlox Early Supporter NFT?
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="faq-3">
                        How do I see my Early Supporter NFT?
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="faq-4">
                        Is the Early Supporter NFT a BeatBlox’s Auction House
                        Music NFT?
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="faq-5">
                        What are gas, gwei or network fees?
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="faq-6">
                        What happens to gas fees?
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="faq-7">
                        What is a Blockchain?
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="faq-8">What is an NFT?</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="faq-9">
                        What is cryptocurrency?
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="faq-10">
                        What is a “digital wallet”?
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="faq-11">What is Ethereum?</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="faq-12">
                        What is Polygon (previously known as MATIC)?
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="faq-13">
                        What blockchain are these NFTs minted on?
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="faq-14">
                        How do I purchase MATIC (Polygon)?
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="faq-15">
                        What is an NFT marketplace?
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={8}>
                  <Tab.Content>
                    <Tab.Pane eventKey="faq-1">
                      <h3 className="mb-3">What is BeatBlox?</h3>
                      <p>
                        We are a platform that explores the possibilities of
                        blockchain technology to empower a new generation of
                        creators and audiences.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="faq-2">
                      <h3 className="mb-3">
                        What is BeatBlox Early Supporter NFT?
                      </h3>
                      <p>
                        We are minting a special NFT that will be available for
                        10 MATIC and will grant early supporters the following
                        benefits:
                        <br />
                        <br />
                        Early access to Closed Beta Auction House.
                        <br />
                        BeatBlox Collectible Credential Artwork.
                        <br />
                        BeatBlox Wearable for Decentraland.
                        <br />
                        BeatBlox Genesis Tokenized Track.
                        <br />
                        Voting power for future governance system over platform
                        catalog and activities.
                        <br />
                        BeatBlox Airdrops.
                        <br />
                        Membership for BeatBlox Decentraland District Mountain
                        Club.
                        <br />
                        Access to early supporters only virtual events and meet
                        & greets.
                        <br />
                        Preferential access to future BeatBlox products.
                        <br />
                        1 out of 1000 will randomly receive an extremely rare
                        Credential.
                        <br />
                        Decentraland District Games and Installations credits.
                        <br />
                        Token compatible with every major marketplace for
                        secondary sales, no commission added
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="faq-3">
                      <h3 className="mb-3">
                        How do I see my Early Supporter NFT?
                      </h3>
                      <p>
                        After you successfully mint one of our Early Supporters
                        NFT your balance, located in the NFT section of the
                        landing page, should increase by one. You will also be
                        able to see it on OpenSea under your collection.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="faq-4">
                      <h3 className="mb-3">
                        Is the Early Supporter NFT a BeatBlox’s Auction House
                        Music NFT?
                      </h3>
                      <p>
                        No, the Early Supporter is an ERC 721 NFT, it works as a
                        membership that will grant its owner address many
                        benefits (such us other NFTs). Early Supporter NFT is
                        compatible and tradable with ERC 721 secondary markets
                        such as OpenSea, while Auction House Music NFTs are
                        native to BeatBlox’s Auction House, therefore only
                        visible and tradable inside said platform.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="faq-5">
                      <h3 className="mb-3">
                        What are gas, gwei or network fees?
                      </h3>
                      <p>
                        Gas fees, or network fees, are a transaction fee on the
                        Polygon blockchain. When you make transactions, such as
                        purchasing an NFT, you will need enough MATIC in your
                        wallet for the initial purchase (minting cost or price)
                        and the associated gas fees (network fee/minting fee).
                        <br />
                        <br />
                        The gas fee enables your transaction to be processed on
                        the Polygon network and stored on the blockchain. The
                        price of gas is volatile and fluctuates based on the
                        supply of miners who receive the gas for the transaction
                        vs the demand from consumers/minters making
                        transactions. At mint time, when a user can enter the
                        gas price they wish to pay, a suggested fee is shown by
                        the wallet (e.g. Metamask) to make the transaction. On
                        the Polygon network, this fee is on average lower than
                        0.3 USD.
                        <br />
                        <br />
                        If the cost of gas price exceeds the fee you offered to
                        pay, your transaction could fail and the gas fee will be
                        lost without the transaction being confirmed. This means
                        that you will have paid gas, without receiving an NFT.
                        Lost gas fees are non-refundable. Move forward at your
                        own risk. Under normal conditions, 0.1 MATIC would be
                        more than enough to mint our NFT.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="faq-6">
                      <h3 className="mb-3">What happens to gas fees?</h3>
                      <p>
                        They are paid to miners as a reward for processing
                        Polygon transactions and keeping the network online.
                        BeatBlox does not set gas fees or receive profits from
                        gas.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="faq-7">
                      <h3 className="mb-3">What is a Blockchain?</h3>
                      <p>
                        A blockchain is a decentralized, distributed, and
                        oftentimes public, digital ledger consisting of records
                        called blocks that is used to record transactions across
                        many computers so that any involved block cannot be
                        altered retroactively, without the alteration of all
                        subsequent blocks.
                        <br />
                        <br />
                        These transactions can record and implement the transfer
                        of value from one user to another, in this case, an NFT.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="faq-8">
                      <h3 className="mb-3">What is an NFT?</h3>
                      <p>
                        A non-fungible token, or NFT, is a digital asset used to
                        represent ownership of unique items or access, whether
                        digital or physical. Most commonly they are used for
                        digital collectibles. Ownership and transfer of an NFT
                        is secured by the blockchain technology, which ensures
                        that one NFT only has one owner at any given time, and
                        that nobody can modify the history of the token’s
                        ownership.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="faq-9">
                      <h3 className="mb-3">What is cryptocurrency?</h3>
                      <p>
                        Cryptocurrency is a digital currency or store of value
                        that uses the blockchain, a digital transaction ledger,
                        to record and secure online transactions.
                        Cryptocurrencies can be used to buy goods and services
                        or to pay for fees to operate in a certain blockchain
                        environment.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="faq-10">
                      <h3 className="mb-3">What is a “digital wallet”?</h3>
                      <p>
                        A blockchain wallet is a digital storage that enables
                        you to store and transact with cryptocurrency. In its
                        simplest form, a wallet comprises a public and private
                        key, which are cryptographically generated.
                        <br />
                        <br />
                        To make the process of setting up a wallet
                        user-friendly, there are many software wallets, such as
                        Metamask, which equip you with a wallet address, key
                        vault, secure login, and backup options to manage your
                        digital assets securely through different blockchains.
                        Metamask runs as a browser extension and/or mobile app,
                        and you can be up and running in just a couple minutes.
                        Learn more at Metamask FAQ.
                        <br />
                        <br />
                        With a digital wallet, you hold the keys and are in
                        charge of your own assets. Your assets are only as safe
                        as your keys, so back them up and keep them safe!
                        Remember to never, ever share your seed phrase to
                        anyone. That is for your eyes only.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="faq-11">
                      <h3 className="mb-3">What is Ethereum?</h3>
                      <p>
                        Ethereum is a blockchain which provides open access to
                        digital money and data-friendly services for everyone –
                        no matter your background or location. It&apos;s a
                        community-built technology behind the cryptocurrency
                        ether (ETH) and thousands of applications you can use
                        today. However, nowadays the fees to operate in this
                        network might be really high, that is one of the reasons
                        why BeatBlox was developed over a Ethereum&apos;s Layer
                        2 solution called Polygon.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="faq-12">
                      <h3 className="mb-3">
                        What is Polygon (previously known as MATIC)?
                      </h3>
                      <p>
                        Polygon is a network of secure Layer 2 (L2) eco-friendly
                        solutions and autonomous sidechains. It aims to increase
                        Ethereum scalability and reduce transaction costs. It’s
                        native token is called MATIC which can be used both for
                        paying for goods and services and gas fees.
                        <br />
                        <br />
                        You can check MATIC token price compared to USD on the
                        following link:
                        <a
                          href="https://www.coingecko.com/es/monedas/polygon"
                          target="_blank"
                          rel="noreferrer"
                        >
                          https://www.coingecko.com/es/monedas/polygon
                        </a>
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="faq-13">
                      <h3 className="mb-3">
                        What blockchain are these NFTs minted on?
                      </h3>
                      <p>
                        This NFT is minted on the Polygon blockchain. Our
                        Auction House also runs over this blockchain network.
                        <br />
                        <br />
                        MetaMask does not include Polygon by default, that is
                        why our minting wizard set it up for you.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="faq-14">
                      <h3 className="mb-3">
                        How do I purchase MATIC (Polygon)?
                      </h3>
                      <p>
                        Remember you will need MATIC tokens both for paying the
                        NFT price and for gas fees. 10.1 MATIC in your wallet
                        would be enough for this task.
                        <br />
                        <br />
                        You can purchase MATIC through an online exchange such
                        as:
                        <a
                          href="https://www.binance.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          https://www.binance.com
                        </a>{" "}
                        or
                        <a
                          href="https://ftx.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          https://ftx.com
                        </a>
                        Once you have purchased MATIC, you can transfer the
                        funds into your Metamask or another compatible wallet to
                        purchase an NFT.
                        <br />
                        <br />
                        Even though it is the native token of the Polygon
                        network, the MATIC token has its representation in many
                        blockchains, so be very aware that you must withdraw
                        your tokens over the MATIC/Polygon network. Most
                        exchanges ask you over which network you want to
                        withdraw your tokens at the moment of setting up a
                        transfer. For further information please visit the FAQs
                        section of your selected platform.
                        <br />
                        <br />
                        FTX example:
                        <br />
                        <br />
                        Please keep in mind that there are limits on the amounts
                        of MATIC you can buy and sell based on your account and
                        the platform you’re using.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="faq-15">
                      <h3 className="mb-3">What is an NFT marketplace?</h3>
                      <p>
                        NFT marketplaces enable creators and collectors to buy,
                        sell and create. After connecting your wallet, you can
                        purchase, auction or sell a wide range of NFTs. The
                        leading open NFT marketplace is called Opensea, this is
                        also referred to as the secondary market. BeatBlox’s
                        Auction House is its own NFT marketplace for tokenized
                        music.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  );
}
