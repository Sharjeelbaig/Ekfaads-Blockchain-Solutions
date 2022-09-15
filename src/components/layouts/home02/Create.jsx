import React from 'react';
import { Link } from 'react-router-dom'

const Create = props => {
    const data = props.data
    return (
    <section className="create-and-sell tf-section bg-color-14161B">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="sc-heading style-2 create-and-sell">
                        <div className="content-left">
                            <div className="inner">
                                <h3>Create and sell your Blockchain Developerss</h3>
                                <p className="desc">Get news about ekfaads </p>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    data.map((item,index)=> (
                        <div key={index} className="col-lg-3 col-md-6 col-12">
                        <div className={`sc-wallet style-2 ${item.class}`}>
                            <div className="icon">
                                <img src={item.img} alt="Ekfaads" />
                            </div>
                            <div className="content">
                                <h5><Link to="/Developers">{item.title}</Link></h5>
                                <p>{item.desc}</p>
                                <Link to="/Developers" className="read-more"><i
                                        className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    </section>
    );
};

export default Create;
