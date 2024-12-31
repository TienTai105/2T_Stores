import React from "react";
import "./footer.css"
import { Link } from 'react-router-dom'

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


const footer = () => {
    return (
        <section className="footerWrapper">
            <div className="footerBoxes">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="box d-flex align-items-center w-100">
                                <span><img src={'/Images/icon1.svg'} /></span>
                                <div className="info">
                                    <h4>Best prices & offers</h4>
                                    <p>Orders $50 or more</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box d-flex align-items-center w-100">
                                <span><img src={'/Images/icon2.svg'} /></span>
                                <div className="info">
                                    <h4>Free delivery</h4>
                                    <p>24/7 amazing service</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box d-flex align-items-center w-100">
                                <span><img src={'/Images/icon3.svg'} /></span>
                                <div className="info">
                                    <h4>Great daily deal</h4>
                                    <p>When you sign up</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box d-flex align-items-center w-100">
                                <span><img src={'/Images/icon4.svg'} /></span>
                                <div className="info">
                                    <h4>Wide assortment</h4>
                                    <p>Mega Discounts</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box d-flex align-items-center w-100">
                                <span><img src={'/Images/icon5.svg'} /></span>
                                <div className="info">
                                    <h4>Easy return</h4>
                                    <p>Within 30 days</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 part1">
                            <Link to='/' className="logo">2T Store<span>.</span></Link>
                            <br /><br />
                            <p>The best store for your choose</p>
                            <br />

                            <p><LocationOnOutlinedIcon /><strong>Address</strong>: 151C Hai Ba Trung, P.8, Quan 3, TP.HCM</p>
                            <p><HeadphonesOutlinedIcon /><strong>Call us</strong>: (+84) - 086-796-3790 </p>
                            <p><EmailOutlinedIcon /><strong>Email</strong>: 2TStore@gmail.com</p>
                            <p><WatchLaterOutlinedIcon /><strong>Hours</strong>: 10:00 - 18:00, Mon - Sat</p>
                        </div>


                        <div className="col-md-9 part2 ">
                            <div className="row">
                                <div className="col">
                                    <h3>Account</h3>
                                    <ul class="footer-list mb-sm-5 mb-md-0">
                                        <li><Link to="#">Account</Link></li>
                                        <li><Link to="#">Delivery Information</Link></li>
                                        <li><Link to="#">Privacy Policy</Link></li>
                                        <li><Link to="#">Contact Us</Link></li>
                                        <li><Link to="#">Support Center</Link></li>
                                    </ul>
                                </div>

                                <div className="col">
                                    <h3>Category</h3>
                                    <ul class="footer-list mb-sm-5 mb-md-0">
                                        <li><Link to="#">About Us</Link></li>
                                        <li><Link to="#">Delivery Information</Link></li>
                                        <li><Link to="#">Privacy Policy</Link></li>
                                        <li><Link to="#">Contact Us</Link></li>
                                        <li><Link to="#">Support Center</Link></li>
                                    </ul>
                                </div>

                                <div className="col">
                                    <h3>Popular</h3>
                                    <ul class="footer-list mb-sm-5 mb-md-0">
                                        <li><Link to="#">About Us</Link></li>
                                        <li><Link to="#">Delivery Information</Link></li>
                                        <li><Link to="#">Privacy Policy</Link></li>
                                        <li><Link to="#">Contact Us</Link></li>
                                        <li><Link to="#">Support Center</Link></li>
                                    </ul>
                                </div>

                                <div className="col">
                                    <h3>Company</h3>
                                    <ul class="footer-list mb-sm-5 mb-md-0">
                                        <li><Link to="#">About Us</Link></li>
                                        <li><Link to="#">Delivery Information</Link></li>
                                        <li><Link to="#">Privacy Policy</Link></li>
                                        <li><Link to="#">Contact Us</Link></li>
                                        <li><Link to="#">Support Center</Link></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr />

                   <div className="row lastStrip">
                        <div className="col-md-3 part_1 d-flex align-items-center">
                            <p className="mb-0">© 2024, 2TStore 
                                All rights reserved
                            </p>
                        </div>

                        <div className="col-md-6 part3 d-flex align-items-center justify-content-end part_3">
                            <div className="d-flex align-items-center">
                                <h5>Follow</h5>
                                <ul className="list list-inline">
                                    <li className="list list-inline">
                                        <a href="https://www.facebook.com/tai.tran.376520"><FacebookOutlinedIcon/></a>
                                    </li>
                                    <li className="list list-inline">
                                        <Link to={''}><TwitterIcon/></Link>
                                    </li>
                                    <li className="list list-inline">
                                        <Link to={''}><InstagramIcon/></Link>
                                    </li>
                                    <li className="list list-inline">
                                        <Link to={''}><YouTubeIcon/></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                   </div>
                </div>
            </footer>


        </section>

    )
}
export default footer;