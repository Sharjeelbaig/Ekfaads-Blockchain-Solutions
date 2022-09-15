import React, { useState,useEffect } from 'react';
import Header from '../components/header/Header';
// import Footer from '../components/footer/Footer';
import Slider02 from '../components/slider/Slider02';
import dataSlider2 from '../assets/fake-data/dataSlider2';
import BestSeller from '../components/layouts/home02/BestSeller';
import dataBestSeller from '../assets/fake-data/dataBestSeller';
import LiveAution from '../components/layouts/home02/LiveAution';
import dataLiveAution from '../assets/fake-data/dataLiveAution'
import Create from '../components/layouts/home02/Create';
import dataCreate from '../assets/fake-data/dataCreate'
import LatestCollections from '../components/layouts/home02/LatestCollections';
import dataCollections from '../assets/fake-data/dataCollections'
import HotCollections from '../components/layouts/home02/HotCollections';
import dataHotCollection from '../assets/fake-data/dataHotCollection';
import PopularCollection from '../components/layouts/home02/PopularCollection';
import dataPopularCollection from '../assets/fake-data/dataPopularCollection';
import FooterStyle2 from '../components/footer/FooterStyle2';
import { Newsletters } from '../components/layouts/home02/Newsletters';
import { ReactPictureGrid } from 'react-picture-grid';
import Etherium from '../assets/images/tech-expertise/Etherium.png'
import Tron from '../assets/images/tech-expertise/Tron.png'
import Cordana from '../assets/images/tech-expertise/Cordana.png'
import binance from '../assets/images/tech-expertise/binance.png'
import Polygon from '../assets/images/tech-expertise/Polygon.png'
import Hyperledger from '../assets/images/tech-expertise/Hyperledger.png'
import Avalanche from '../assets/images/tech-expertise/Avalanche.png'
import Klaytn from '../assets/images/tech-expertise/Klaytn.png'
import Cosmos from '../assets/images/tech-expertise/Cosmos.png'
import HyperledgerFabric from '../assets/images/tech-expertise/Hyperledger Fabric.png'
import Harmony from '../assets/images/tech-expertise/Harmony.png'
import Solana from '../assets/images/tech-expertise/Solana.png'
import { auth } from '../firebase';
import Login from './Login';


const Home02 = () => {
  const techExpertise = [
    {
      image:Etherium,
      title: 'Etherium',
      description: 'Tech Expertise',
    },
    {
      image:
        Hyperledger,
      title: 'Hyperledger',
      description: 'Tech Expertise',
    },
    {
      image:
        Solana,
      title: 'Solana',
      description: 'Tech Expertise',
    },
    {
      image:
        Cordana,
      title: 'Cordana',
      description: 'Tech Expertise',
    },
    {
      image:
        binance,
      title: 'binance',
      description: 'Tech Expertise',
    },
    {
      image:
        Polygon,
      title: 'Polygon',
      description: 'Tech Expertise',
    },
    {
      image:
        Tron,
      title: 'Tron',
      description: 'Tech Expertise',
    },
    {
      image:
        Avalanche,
      title: 'Avalanche',
      description: 'Tech Expertise',
    },
    {
      image:
        Klaytn,
      title: 'Klaytn',
      description: 'Tech Expertise',
    },
    {
      image:
        Cosmos,
      title: 'Cosmos',
      description: 'Tech Expertise',
    },
    {
      image:
        HyperledgerFabric,
      title: 'HyperledgerFabric',
      description: 'Tech Expertise',
    },
    {
      image:
        Harmony,
      title: 'Harmony',
      description: 'Tech Expertise',
    },
  ];
  const [screen, setscreen] = useState(<></>)
  useEffect(()=>{
    auth.onAuthStateChanged(user => {
      user ? setscreen(<div className='home-2'>
      <Header />
      <Slider02 data={dataSlider2} />
      <BestSeller data={dataBestSeller} />
      <LiveAution data={dataLiveAution} />
      {/* <Create data={dataCreate} /> */}
<ReactPictureGrid 
data={techExpertise}
showPreview
closeOnClick
imageClass='techExpertise' 
showTitle gap={5} />
      <LatestCollections data={dataCollections} />
      <HotCollections data={dataHotCollection} />
      <PopularCollection data={dataPopularCollection} />
      <Newsletters />
      <FooterStyle2 />
  </div>) : setscreen(<Login />)
    })
  },[])
  return screen;
};

export default Home02;
