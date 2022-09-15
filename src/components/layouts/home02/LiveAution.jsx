import React from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y , Grid } from 'swiper';
import Countdown from "react-countdown";


const LiveAution = props => {
    const data = props.data;
  return (
    <section className="live-autions tf-section bg-body">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="sc-heading style-2 has-icon">
                        <div className="content-left">

                            <div className="inner">
                                <div className="group">
                                    <div className="icon"><i className="ripple"></i></div>
                                    <h3>Blockchain Offerings</h3>
                                </div>
                                <p className="desc">Enterprise blockchain services to build a better future.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="swiper-container live-auc style-2">
                        <div className="swiper-wrapper">
                        <Swiper
                        modules={[Navigation, Scrollbar, A11y  , Grid]}
                        spaceBetween={30}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                },
                            767: {
                                slidesPerView: 1,
                            },
                            991: {
                                slidesPerView: 2,
                            },
                            }}
                        slidespercolumn={2}
                        slidesPerGroup={2}
                        // slidesPerColumnFill= "row"
                        grid={{
                            "rows": 2
                        }}
                        navigation
                        scrollbar={{ draggable: true }}
                        >
                        {
                            data.map((item,index) => (
                                <SwiperSlide key={index}>
                                    <LiveAutionItem item={item} />
                                </SwiperSlide>
                            ))
                        }
                        </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

const LiveAutionItem = props => (
    <div className="sc-product-item style-7 flex">
    {/* <div className="product-img">
        <img src={props.item.img} alt="Ekfaads" />
    
        <Link to="/Developers"
            className="sc-button style letter"><span>More Info</span></Link>
    </div> */}
    <center>
    <div className="product-content">
        {/* <label>{props.item.tags}</label> */}
        <h5 className="title"><Link to="/item-details">{props.item.title}</Link> </h5>
        <p>{props.item.desc}</p>
        {/* <div className="product-author flex">
            <div className="avatar">
                <img src={props.item.imgAuthor} alt="Ekfaads" />
            </div>
            <div className="infor">
                <div className="author-name"><Link to="/Developers">{props.item.name}</Link></div>
                <span>Creator</span>
            </div>
        </div> */}
        <div className="product-price">
            {/* <div className="title">Current Bid</div> */}
            {/* <div className="price">
                <span>{props.item.price}</span>
                <span>= {props.item.priceChange}</span>
            </div> */}
        </div>
    </div>
    </center>
</div>
)

export default LiveAution;
