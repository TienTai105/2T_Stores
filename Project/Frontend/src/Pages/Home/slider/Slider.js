import React from "react";
import './Slider.css';
import Slider from "react-slick";
import Button from '@mui/material/Button';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


const HomeSlider =()=> {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows:true
    };
    return (
        <section className="homeSlider">
            <div className="container-fluid position-relative">
                <Slider {...settings} className="home_slider_Main">
                    <div className="item">
                        <img src={'/Images/slider1.jpg'} className="w-100"/>
                        <div className="info">
                            <h2 class="mb-4">
                                Don't miss <br/>
                                    new featured<br/>
                                grocery deals
                            </h2>
                            <p>Sign up for the daily newsletter</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={'/Images/slider2.jpg'} className="w-100"/>
                        <div className="info">
                            <h2 class="mb-3">
                                Don't miss <br/>
                                    new featured<br/>
                                grocery deals
                            </h2>
                            <p>Sign up for the daily newsletter</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={'/Images/slider3.jpg'} className="w-100"/>
                        <div className="info">
                            <h2 class="mb-3">
                                Don't miss <br/>
                                    new featured<br/>
                                grocery deals
                            </h2>
                            <p>Sign up for the daily newsletter</p>
                        </div>
                    </div>
                </Slider>

                <div className="newsLetterBanner">
                    <SendOutlinedIcon/>
                    <input type="text" placeholder="Your email address"/>
                    <Button className="bg-g">Subscribe</Button>
                </div>
            </div>
        </section>
    )
}
export default HomeSlider;