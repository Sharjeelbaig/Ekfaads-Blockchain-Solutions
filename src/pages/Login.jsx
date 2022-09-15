import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import  Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';

import img1 from '../assets/images/background/img-login.jpg'
import { auth } from '../firebase';

const Login = () => {
    const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  
  const signin = () => { 
      auth.signInWithEmailAndPassword(email,password).then(()=>{console.log('success')}).catch(e => alert(e))
  };
  return <div>
    {/* <Header /> */}
    <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-title-inner flex">
                        <div className="page-title-heading">
                            <h2 className="heading">Log In</h2>
                        </div>
                        <div className="breadcrumbs">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Log In</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="tf-section login-page">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-create-item-content">
                        <div className="form-create-item">
                            <div className="sc-heading">
                                <h3>Login Your Account</h3>
                                <p className="desc">Connect your account </p>
                            </div>
                            <div id="create-item-1">
                                <input
                                onChange={(text)=>{setemail(text.target.value)}}
                                name="user" type="text" placeholder="User Name/Email Address"
                                    required />
                                <input
                                onChange={(text)=>{setpassword(text.target.value)}}
                                name="number" type="password" placeholder="Password"
                                    required />
                                <div className="input-group style-2 ">
                                    <div className="btn-check">
                                        <input type="radio" id="html" name="fav_language" value="HTML" />
                                        <label htmlFor="html">Remember Me</label>
                                    </div>
                                </div>
                                <button
                                onClick={signin}
                                    className="sc-button style letter style-2"><span>Sign In</span> </button>
                                      <br />
                                    <br />
                                    <Link to={'/Register'}><button 
                                    className="sc-button style style-1"><span>Register, if you don't have an account</span> </button></Link>
                            </div>
                            {/* <div className="other-login">
                                <div className="text">Or</div>
                                <div className="widget-social">
                                    <ul>
                                        <li><Link to="#" className="active"><i className="fab fa-facebook-f"></i></Link>
                                        </li>
                                        <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-google-plus-g"></i></Link></li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                        <div className="form-background">
                            <img src={img1} alt="Ekfaads" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Newsletters />
    {/* <Footer /> */}
  </div>;
};

export default Login;
