import React from "react";
import './banner1.css';
import {Link} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
const banner1 = () =>{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade:false,
        arrows:true
      };
return(
<section className="catSliderSection">
            <div className="container-fluid">
                <h2 className="hd">Shop By Sport</h2>
                <Slider {...settings} className="cat_slider_Main">
                    <div className="item">
                      <div className="info">
                        <Link><img src={'/Images/banner05.jpg'} alt="Product 1"/></Link> 
                        <button className="sport-card-button">Running</button>
                      </div> 
                    </div>
                    <div className="item">
                      <div className="info">
                        <Link><img src={'/Images/banner06.jpg'} alt="Product 1"/></Link> 
                        <button className="sport-card-button">Football</button>
                      </div> 
                    </div>
                    <div className="item">
                      <div className="info">
                        <Link><img src={'/Images/banner07.jpg'} alt="Product 1"/></Link> 
                        <button className="sport-card-button">Basketball</button>
                      </div> 
                    </div>
                    <div className="item">
                      <div className="info">
                        <Link><img src={'/Images/banner08.jpg'} alt="Product 1"/></Link> 
                        <button className="sport-card-button">Training and Gym</button>
                      </div> 
                    </div>
                    <div className="item">
                      <div className="info">
                        <Link><img src={'/Images/banner09.jpg'} alt="Product 1"/></Link> 
                        <button className="sport-card-button">Tennis</button>
                      </div> 
                    </div>
                    <div className="item">
                      <div className="info">
                        <Link><img src={'/Images/banner10.jpg'} alt="Product 1"/></Link> 
                        <button className="sport-card-button">Yoga</button>
                      </div> 
                    </div>
                    <div className="item">
                      <div className="info">
                        <Link><img src={'/Images/banner11.jpg'} alt="Product 1"/></Link> 
                        <button className="sport-card-button">Skateboarding</button>
                      </div> 
                    </div>
                </Slider>
            </div>
            <div class="bottom-viewall">
        <a href="/listing" class="btn">SHOP NOW</a>
    </div>
    
        </section>        
)
}
export default banner1;