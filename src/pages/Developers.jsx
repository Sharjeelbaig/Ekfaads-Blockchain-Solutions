import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import BestSeller from '../components/layouts/BestSeller';
import dataBestSeller from '../assets/fake-data/dataBestSeller';
import TopSeller from '../components/layouts/Developers/BestSeller';
import HotCollection from '../components/layouts/Developers/HotCollection';
import dataHotCollection2 from '../assets/fake-data/dataHotCollection2';
import  Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';

const Developers = () => {
  return <div className='Developers'>
    <Header />
    <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-title-inner flex">
                        <div className="page-title-heading">
                            <h2 className="heading">Developers</h2>
                        </div>
                        <div className="breadcrumbs">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Developers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <BestSeller data={dataBestSeller} />
    <TopSeller data={dataBestSeller} />
    <HotCollection data={dataHotCollection2} />
    <Newsletters />
    <Footer />
  </div>;
};

export default Developers;
